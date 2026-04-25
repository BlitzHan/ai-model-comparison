document.addEventListener('DOMContentLoaded', () => {
    const modelFiltersContainer = document.getElementById('model-filters');
    const tableHead = document.getElementById('table-head');
    const tableBody = document.getElementById('table-body');
    const emptyState = document.getElementById('empty-state');
    const comparisonTable = document.getElementById('comparison-table');

    // Varsayılan: Hepsi seçili
    let selectedModelIds = LLM_DATA.models.map(m => m.id);

    function initFilters() {
        modelFiltersContainer.innerHTML = '';
        LLM_DATA.models.forEach(model => {
            const chip = document.createElement('label');
            chip.className = `filter-chip ${selectedModelIds.includes(model.id) ? 'active' : ''}`;
            chip.innerHTML = `
                <input type="checkbox" value="${model.id}" ${selectedModelIds.includes(model.id) ? 'checked' : ''}>
                <div class="color-dot" style="background-color: ${model.color}"></div>
                <span>${model.name}</span>
            `;

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
            emptyState.classList.remove('hidden');
            return;
        }

        comparisonTable.classList.remove('hidden');
        emptyState.classList.add('hidden');

        const activeModels = LLM_DATA.models.filter(m => selectedModelIds.includes(m.id));
        
        // Şirket Başlıkları
        let companyHTML = `<tr><th rowspan="2" style="width: 180px;">Benchmark</th>`;
        LLM_DATA.companies.forEach(company => {
            const companyActiveModels = activeModels.filter(m => company.ids.includes(m.id));
            if (companyActiveModels.length > 0) {
                companyHTML += `
                    <th colspan="${companyActiveModels.length}" class="company-header" style="color: ${company.color}">
                        ${company.name.toUpperCase()}
                    </th>
                `;
            }
        });
        companyHTML += `</tr>`;

        // Model Detay Başlıkları
        let modelHTML = `<tr>`;
        LLM_DATA.companies.forEach(company => {
            const companyActiveModels = activeModels.filter(m => company.ids.includes(m.id));
            companyActiveModels.forEach(model => {
                modelHTML += `
                    <th style="width: calc((100% - 180px) / ${activeModels.length});">
                        <div class="model-header">
                            <span class="name" style="color: ${model.color}">${model.name}</span>
                            <span class="date">${model.date}</span>
                        </div>
                    </th>
                `;
            });
        });
        modelHTML += `</tr>`;

        tableHead.innerHTML = companyHTML + modelHTML;

        // Body
        let bodyHTML = '';
        LLM_DATA.categories.forEach(category => {
            const visibleBenchmarks = category.benchmarks.filter(bench => {
                return activeModels.some(model => bench.values[model.id] !== undefined && bench.values[model.id] !== null);
            });

            if (visibleBenchmarks.length > 0) {
                bodyHTML += `<tr class="category-row"><td colspan="${activeModels.length + 1}">${category.name}</td></tr>`;

                visibleBenchmarks.forEach(bench => {
                    bodyHTML += `<tr><td data-tooltip="${bench.tooltip || ''}">${bench.name}</td>`;
                    
                    const bestId = findBestModel(bench, activeModels);
                    const bestExcludingMythosId = findBestModel(bench, activeModels.filter(m => m.id !== 'mythos'));

                    LLM_DATA.companies.forEach(company => {
                        const companyActiveModels = activeModels.filter(m => company.ids.includes(m.id));
                        companyActiveModels.forEach(model => {
                            const val = bench.values[model.id];
                            const displayVal = val || '<span class="na-value">—</span>';
                            
                            let classes = 'value-cell';
                            if (model.id === bestId && model.id === 'mythos') classes += ' best-mythos';
                            else if (model.id === bestExcludingMythosId) classes += ' best-value';
                            
                            bodyHTML += `<td class="${classes}">${displayVal}</td>`;
                        });
                    });
                    bodyHTML += `</tr>`;
                });
            }
        });
        tableBody.innerHTML = bodyHTML;
    }

    function parseValue(val) {
        if (!val || typeof val !== 'string') return -1;
        let clean = val.replace('%', '').replace('$', '').replace('~', '').replace(',', '');
        return parseFloat(clean);
    }

    function findBestModel(bench, modelsToCompare) {
        let maxVal = -1;
        let bestId = null;
        modelsToCompare.forEach(model => {
            const val = parseValue(bench.values[model.id]);
            if (val > maxVal) {
                maxVal = val;
                bestId = model.id;
            }
        });
        return bestId;
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
            const isActive = selectedModelIds.includes(input.value);
            input.checked = isActive;
            if (isActive) chip.classList.add('active');
            else chip.classList.remove('active');
        });
        renderTable();
    }

    initFilters();
    renderTable();
});
