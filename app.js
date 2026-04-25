document.addEventListener('DOMContentLoaded', () => {
    const modelFiltersContainer = document.getElementById('model-filters');
    const tableHead = document.getElementById('table-head');
    const tableBody = document.getElementById('table-body');
    const emptyState = document.getElementById('empty-state');
    const comparisonTable = document.getElementById('comparison-table');
    const chartSection = document.getElementById('chart-section');
    const winChart = document.getElementById('win-chart');

    let selectedModelIds = LLM_DATA.models.map(m => m.id);

    function initFilters() {
        modelFiltersContainer.innerHTML = '';
        LLM_DATA.models.forEach(model => {
            const chip = document.createElement('label');
            chip.className = `filter-chip ${selectedModelIds.includes(model.id) ? 'active' : ''}`;
            chip.innerHTML = `<input type="checkbox" value="${model.id}" ${selectedModelIds.includes(model.id) ? 'checked' : ''}><span>${model.name}</span>`;

            chip.querySelector('input').addEventListener('change', (e) => {
                if (e.target.checked) {
                    selectedModelIds.push(model.id);
                    chip.classList.add('active');
                } else {
                    selectedModelIds = selectedModelIds.filter(id => id !== model.id);
                    chip.classList.remove('active');
                }
                renderTable();
            });
            modelFiltersContainer.appendChild(chip);
        });
    }

    function renderTable() {
        if (selectedModelIds.length === 0) {
            comparisonTable.classList.add('hidden');
            chartSection.classList.add('hidden');
            emptyState.classList.remove('hidden');
            return;
        }

        comparisonTable.classList.remove('hidden');
        chartSection.classList.remove('hidden');
        emptyState.classList.add('hidden');

        const activeModels = LLM_DATA.models.filter(m => selectedModelIds.includes(m.id));
        
        let companyHTML = `<tr><th rowspan="2" style="width: 180px;">Benchmark</th>`;
        LLM_DATA.companies.forEach(company => {
            const companyActiveModels = activeModels.filter(m => company.ids.includes(m.id));
            if (companyActiveModels.length > 0) {
                companyHTML += `<th colspan="${companyActiveModels.length}" class="company-header" style="color: ${company.color}">${company.name.toUpperCase()}</th>`;
            }
        });
        companyHTML += `</tr>`;

        let modelHTML = `<tr>`;
        LLM_DATA.companies.forEach(company => {
            const companyActiveModels = activeModels.filter(m => company.ids.includes(m.id));
            companyActiveModels.forEach(model => {
                modelHTML += `<th style="width: calc((100% - 180px) / ${activeModels.length});"><div class="model-header"><span class="name" style="color: ${model.color}">${model.name}</span><span class="date">${model.date}</span></div></th>`;
            });
        });
        modelHTML += `</tr>`;

        tableHead.innerHTML = companyHTML + modelHTML;

        let bodyHTML = '';
        let winCounts = {};
        
        activeModels.filter(m => m.id !== 'mythos').forEach(m => winCounts[m.id] = 0);

        LLM_DATA.categories.forEach(category => {
            const visibleBenchmarks = category.benchmarks.filter(bench => activeModels.some(model => bench.values[model.id] !== undefined && bench.values[model.id] !== null));

            if (visibleBenchmarks.length > 0) {
                bodyHTML += `<tr class="category-row"><td colspan="${activeModels.length + 1}">${category.name}</td></tr>`;
                visibleBenchmarks.forEach(bench => {
                    bodyHTML += `<tr><td data-tooltip="${bench.tooltip || ''}">${bench.name}</td>`;
                    
                    const maxVal = findMaxValue(bench, activeModels);
                    const maxExcludingMythos = findMaxValue(bench, activeModels.filter(m => m.id !== 'mythos'));

                    LLM_DATA.companies.forEach(company => {
                        const companyActiveModels = activeModels.filter(m => company.ids.includes(m.id));
                        companyActiveModels.forEach(model => {
                            const val = bench.values[model.id];
                            const displayVal = val || '<span class="na-value">—</span>';
                            
                            let content = displayVal;
                            const numVal = parseValue(val);
                            
                            if (val && numVal !== -1) {
                                if (model.id === 'mythos' && numVal === maxVal && maxVal > -1) {
                                    content = `<span class="best-mythos-pill">${displayVal}</span>`;
                                } else if (model.id !== 'mythos' && numVal === maxExcludingMythos && maxExcludingMythos > -1) {
                                    content = `<span class="best-value-pill">${displayVal}</span>`;
                                    winCounts[model.id]++;
                                }
                            }
                            
                            bodyHTML += `<td class="value-cell">${content}</td>`;
                        });
                    });
                    bodyHTML += `</tr>`;
                });
            }
        });
        tableBody.innerHTML = bodyHTML;
        
        renderChart(winCounts, activeModels.filter(m => m.id !== 'mythos'));
    }

    function renderChart(winCounts, models) {
        winChart.innerHTML = '';
        let maxWins = Math.max(...Object.values(winCounts));
        if (maxWins === 0) maxWins = 1;

        // Sort models by win count descending
        const sortedModels = [...models].sort((a, b) => winCounts[b.id] - winCounts[a.id]);

        sortedModels.forEach(model => {
            const wins = winCounts[model.id] || 0;
            if (wins > 0) {
                const percentage = (wins / maxWins) * 100;
                
                const container = document.createElement('div');
                container.className = 'bar-container';
                
                container.innerHTML = `
                    <div class="bar-value" style="color: ${model.color}">${wins}</div>
                    <div class="bar" style="height: ${percentage}%; background-color: ${model.color}"></div>
                    <div class="bar-label">${model.name.replace(' ', '<br>')}</div>
                `;
                winChart.appendChild(container);
            }
        });
    }

    function parseValue(val) {
        if (!val || typeof val !== 'string') return -1;
        let clean = val;
        if (clean.includes('$')) {
            clean = clean.replace(/\./g, '');
        }
        clean = clean.replace(/[%$~,]/g, '');
        return parseFloat(clean);
    }

    function findMaxValue(bench, modelsToCompare) {
        let maxVal = -1;
        modelsToCompare.forEach(model => {
            const val = parseValue(bench.values[model.id]);
            if (val > maxVal) {
                maxVal = val;
            }
        });
        return maxVal;
    }

    document.getElementById('select-all').addEventListener('click', () => {
        selectedModelIds = LLM_DATA.models.map(m => m.id);
        updateUI();
    });

    document.getElementById('clear-selection').addEventListener('click', () => {
        selectedModelIds = [];
        updateUI();
    });

    function updateUI() {
        const chips = modelFiltersContainer.querySelectorAll('.filter-chip');
        chips.forEach(chip => {
            const input = chip.querySelector('input');
            input.checked = selectedModelIds.includes(input.value);
            if (input.checked) chip.classList.add('active');
            else chip.classList.remove('active');
        });
        renderTable();
    }

    initFilters();
    renderTable();
});
