document.addEventListener('DOMContentLoaded', () => {
    const modelFiltersContainer = document.getElementById('model-filters');
    const tableHead = document.getElementById('table-head');
    const tableBody = document.getElementById('table-body');
    const emptyState = document.getElementById('empty-state');
    const comparisonTable = document.getElementById('comparison-table');

    let selectedModelIds = ['opus47', 'gemini31']; // Varsayılan seçim

    // 1. Model Filtrelerini Oluştur
    function initFilters() {
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

    // 2. Tabloyu Render Et
    function renderTable() {
        if (selectedModelIds.length === 0) {
            comparisonTable.classList.add('hidden');
            emptyState.classList.remove('hidden');
            return;
        }

        comparisonTable.classList.remove('hidden');
        emptyState.classList.add('hidden');

        const activeModels = LLM_DATA.models.filter(m => selectedModelIds.includes(m.id));

        // Head Render
        let headHTML = `<tr><th>Benchmark</th>`;
        activeModels.forEach(model => {
            headHTML += `
                <th>
                    <div class="model-header">
                        <span class="name" style="color: ${model.color}">${model.name}</span>
                        <span class="date">${model.date}</span>
                    </div>
                </th>
            `;
        });
        headHTML += `</tr>`;
        tableHead.innerHTML = headHTML;

        // Body Render
        let bodyHTML = '';
        LLM_DATA.categories.forEach(category => {
            // Bu kategorideki aktif modellerin en az birinde veri olan benchmarkları bul
            const visibleBenchmarks = category.benchmarks.filter(bench => {
                return activeModels.some(model => bench.values[model.id] !== undefined && bench.values[model.id] !== null);
            });

            if (visibleBenchmarks.length > 0) {
                // Kategori Başlığı
                bodyHTML += `
                    <tr class="category-row">
                        <td colspan="${activeModels.length + 1}">${category.name}</td>
                    </tr>
                `;

                visibleBenchmarks.forEach(bench => {
                    bodyHTML += `<tr><td data-tooltip="${bench.tooltip || ''}">${bench.name}</td>`;
                    
                    // En iyi değeri bul
                    const bestId = findBestModel(bench, activeModels);

                    activeModels.forEach(model => {
                        const val = bench.values[model.id];
                        const displayVal = val || '<span class="na-value">—</span>';
                        const isBest = model.id === bestId;
                        
                        bodyHTML += `
                            <td class="value-cell ${isBest ? 'best-value' : ''}">
                                ${displayVal}
                            </td>
                        `;
                    });
                    bodyHTML += `</tr>`;
                });
            }
        });
        tableBody.innerHTML = bodyHTML;
    }

    // Değerleri karşılaştırmak için sayıya çevir
    function parseValue(val) {
        if (!val || typeof val !== 'string') return -1;
        // % temizle
        let clean = val.replace('%', '').replace('$', '').replace('~', '').replace(',', '');
        return parseFloat(clean);
    }

    function findBestModel(bench, activeModels) {
        let maxVal = -1;
        let bestId = null;

        activeModels.forEach(model => {
            const val = parseValue(bench.values[model.id]);
            if (val > maxVal) {
                maxVal = val;
                bestId = model.id;
            }
        });

        // Eğer birden fazla aynı değer varsa, ilki kalır (basitlik için)
        return bestId;
    }

    // Buton Kontrolleri
    document.getElementById('select-all').addEventListener('click', () => {
        selectedModelIds = LLM_DATA.models.map(m => m.id);
        updateUI();
    });

    document.getElementById('clear-selection').addEventListener('click', () => {
        selectedModelIds = [];
        updateUI();
    });

    document.getElementById('reset-default').addEventListener('click', () => {
        selectedModelIds = ['opus47', 'gemini31'];
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
