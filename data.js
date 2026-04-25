const LLM_DATA = {
    models: [
        { id: 'mythos', name: 'Mythos Preview', company: 'Anthropic', date: 'Nis 26', color: '#c878ff' },
        { id: 'opus47', name: 'Opus 4.7', company: 'Anthropic', date: '16 Nis 26', color: '#f5b98c' },
        { id: 'opus46', name: 'Opus 4.6', company: 'Anthropic', date: '5 Şub 26', color: '#d97757' },
        { id: 'opus45', name: 'Opus 4.5', company: 'Anthropic', date: '24 Kas 25', color: '#a04a2e' },
        { id: 'sonnet46', name: 'Sonnet 4.6', company: 'Anthropic', date: '17 Şub 26', color: '#b8553b' },
        { id: 'gpt55', name: 'GPT 5.5', company: 'OpenAI', date: '23 Nis 26', color: '#6ee7a0' },
        { id: 'gpt54', name: 'GPT 5.4', company: 'OpenAI', date: '5 Mar 26', color: '#4ade80' },
        { id: 'gemini31', name: 'Gemini 3.1 Pro', company: 'Google', date: '19 Şub 26', color: '#60a5fa' },
        { id: 'gemini3', name: 'Gemini 3 Pro', company: 'Google', date: '18 Kas 25', color: '#3b82c7' },
        { id: 'deepseek', name: 'DeepSeek V4-Pro', company: 'DeepSeek', date: '24 Nis 26', color: '#ef4444' },
        { id: 'deepseek32', name: 'DeepSeek V3.2', company: 'DeepSeek', date: '1 Ara 25', color: '#c82626' },
        { id: 'deepseek3', name: 'DeepSeek V3', company: 'DeepSeek', date: '26 Ara 24', color: '#7f1d1d' },
        { id: 'grok420', name: 'Grok 4.20', company: 'xAI', date: '17 Şub 26', color: '#0c85d0' },
        { id: 'grok4', name: 'Grok 4', company: 'xAI', date: 'Tem 25', color: '#1da1f2' }
    ],
    companies: [
        { name: 'Anthropic', ids: ['mythos', 'opus47', 'opus46', 'opus45', 'sonnet46'], color: '#d97757' },
        { name: 'OpenAI', ids: ['gpt55', 'gpt54'], color: '#10a37f' },
        { name: 'Google', ids: ['gemini31', 'gemini3'], color: '#4285F4' },
        { name: 'DeepSeek', ids: ['deepseek', 'deepseek32', 'deepseek3'], color: '#ef4444' },
        { name: 'xAI', ids: ['grok420', 'grok4'], color: '#1da1f2' }
    ],
    categories: [
        {
            name: 'YAZILIM GELİŞTİRME / KODLAMA',
            id: 'coding',
            benchmarks: [
                { id: 'swe_verified', name: 'SWE-bench Verified', tooltip: 'Gerçek GitHub issueları; model kodu düzeltip testlerden geçirmeli.', values: { mythos: '93.9%', opus47: '87.6%', opus46: '80.8%', opus45: '80.9%', sonnet46: '79.6%', gpt55: null, gpt54: '77.2%', gemini31: '80.6%', gemini3: '76.2%', deepseek: '80.6%', deepseek32: '~74%', deepseek3: '42.0%', grok420: null, grok4: '72.0%' } },
                { id: 'swe_pro', name: 'SWE-bench Pro', tooltip: 'SWE-bench\'in daha zor pro sürümü; gerçek yazılım mühendisliği görevleri.', values: { mythos: '77.8%', opus47: '64.3%', opus46: '53.4%', gpt55: '58.6%', gpt54: '57.7%', gemini31: '54.2%', gemini3: '43.3%', deepseek: '55.4%' } },
                { id: 'swe_multilingual', name: 'SWE-bench Multilingual', tooltip: 'Çok dilli kod düzenleme sınavı: Python, Rust, C++, Go, JS.', values: { mythos: '87.3%', opus46: '77.5%', deepseek: '76.2%' } },
                { id: 'swe_multimodal', name: 'SWE-bench Multimodal', tooltip: 'Görsel ve kod içeren çok kipli yazılım mühendisliği görevleri.', values: { mythos: '59.0%', opus46: '27.1%' } },
                { id: 'terminal_bench', name: 'Terminal-Bench 2.0', tooltip: 'Karmaşık terminal görevleri; kabuk komutları ve dosya işlemleri gerektirir.', values: { mythos: '82.0%', opus47: '69.4%', opus46: '65.4%', opus45: '59.3%', sonnet46: '59.1%', gpt55: '82.7%', gpt54: '75.1%', gemini31: '68.5%', gemini3: '56.9%', deepseek: '67.9%', deepseek32: '46.4%' } },
                { id: 'livecodebench', name: 'LiveCodeBench', tooltip: 'Model eğitim kesiminden sonra toplanan yarışmacı programlama problemleri.', values: { opus46: '88.8%', gemini31: '91.7%', deepseek: '93.5%', grok4: '79.0%' } },
                { id: 'codeforces', name: 'Codeforces (Elo)', tooltip: 'Codeforces yarışmacı programlama problemlerini çözerek kazanılan Elo puanı.', values: { gpt54: '3168', gemini31: '3052', deepseek: '3206' } }
            ]
        },
        {
            name: 'GENEL BİLGİ & AKIL YÜRÜTME',
            id: 'knowledge',
            benchmarks: [
                { id: 'mmlu_pro', name: 'MMLU-Pro', tooltip: '14 disiplinde 12 bin çok seçmeli soru, MMLU\'dan zor.', values: { opus46: '89.1%', gpt54: '87.5%', gemini31: '91.0%', deepseek: '87.5%', deepseek3: '75.9%' } },
                { id: 'gpqa_diamond', name: 'GPQA Diamond', tooltip: '198 doktora seviyesi bilim sorusu (biyoloji, fizik, kimya).', values: { mythos: '94.6%', opus47: '94.2%', opus46: '91.3%', opus45: '87.0%', sonnet46: '89.9%', gpt55: '93.6%', gpt54: '94.4%', gemini31: '94.3%', gemini3: '91.9%', deepseek: '90.1%', deepseek32: '82.4%', deepseek3: '59.1%', grok4: '87.5%' } },
                { id: 'hle', name: 'Humanity\'s Last Exam', tooltip: '100\'den fazla alanda uzmanlar tarafından yazılmış 3000 soru; mevcut yapay zekâları yenmek için tasarlandı.', values: { mythos: '56.8%', opus47: '46.9%', opus46: '40.0%', sonnet46: '33.2%', gpt55: '41.4%', gpt54: '42.7%', gemini31: '44.4%', gemini3: '37.5%', deepseek: '37.7%', grok4: '25.0%' } },
                { id: 'simpleqa', name: 'SimpleQA-Verified', tooltip: 'Tek doğru yanıtı olan kısa bilgi soruları; halüsinasyon testi.', values: { opus46: '46.2%', gpt54: '45.3%', gemini31: '75.6%', deepseek: '57.9%' } },
                { id: 'chinese_simpleqa', name: 'Chinese-SimpleQA', tooltip: 'Çince bilgi soruları için halüsinasyon testi.', values: { opus46: '76.2%', gpt54: '76.8%', gemini31: '85.9%', deepseek: '84.4%' } },
                { id: 'aime_2025', name: 'AIME 2025', tooltip: 'Amerikan Davetli Matematik Sınavı; 15 zorlu lise matematik problemi (araç yok).', values: { opus46: '99.8%', gemini31: '98.1%', gemini3: '95.0%', deepseek32: '96.0%', grok4: '91.7%' } },
                { id: 'usamo_2026', name: 'USAMO 2026', tooltip: 'ABD Matematik Olimpiyatı; 6 ispat sorusu, 2 gün, cevap değil tam ispat yazılmalı (en zor lise matematik sınavı).', values: { gpt54: '95.2%', gemini31: '74.4%' } },
                { id: 'hmmt_2026', name: 'HMMT 2026 Feb', tooltip: 'Harvard-MIT Matematik Turnuvası; ileri lise ve erken lisans matematiği.', values: { opus46: '96.2%', gpt54: '97.7%', gemini31: '94.7%', deepseek: '95.2%' } },
                { id: 'imo_answer_bench', name: 'IMOAnswerBench', tooltip: 'IMO sorularının sayısal cevaplarını test eden matematik ölçümü.', values: { opus46: '75.3%', gpt54: '91.4%', gemini31: '81.0%', deepseek: '89.8%' } },
                { id: 'apex', name: 'Apex', tooltip: 'Uzman matematikçiler tarafından hazırlanan araştırma seviyesi matematik problemleri.', values: { opus46: '34.5%', gpt54: '54.1%', gemini31: '60.9%', gemini3: '18.4%', deepseek: '38.3%' } },
                { id: 'apex_shortlist', name: 'Apex Shortlist', tooltip: 'Uzman matematikçiler tarafından hazırlanan araştırma seviyesi matematik problemleri (kısaltılmış liste).', values: { opus46: '85.9%', gpt54: '78.1%', gemini31: '89.1%', deepseek: '90.2%' } },
                { id: 'arc_agi_1', name: 'ARC-AGI-1', tooltip: 'Yeni desen çıkarımını test eden soyut görsel bulmacalar (2019 orijinal).', values: { opus47: '92.0%', opus46: '94.0%', opus45: '80.0%', sonnet46: '86.5%', gpt55: '95.0%', gpt54: '93.7%', gemini31: '98.0%', gemini3: '75.0%', deepseek32: '57.0%', grok420: '89.5%', grok4: '66.6%' } },
                { id: 'arc_agi_2', name: 'ARC-AGI-2', tooltip: 'Daha derin muhakeme gerektiren ikinci nesil ARC bulmacaları.', values: { opus47: '75.8%', opus46: '68.8%', opus45: '37.6%', sonnet46: '58.3%', gpt55: '85.0%', gpt54: '74.0%', gemini31: '77.1%', gemini3: '31.1%', deepseek32: '4.0%', grok420: '65.1%', grok4: '15.9%' } },
                { id: 'arc_agi_3', name: 'ARC-AGI-3', tooltip: 'Etkileşimli oyun benzeri ortamlar içeren en yeni ARC sürümü.', values: { opus46: '0.5%', gpt54: '0.2%', gemini31: '0.4%', grok420: '0.1%' } },
                { id: 'mmmlu', name: 'MMMLU (Çok Dilli)', tooltip: 'Çok dilli MMLU; modelin farklı dillerdeki bilgi ve muhakeme kapasitesini ölçer.', values: { opus47: '91.5%', opus46: '91.1%', opus45: '90.8%', sonnet46: '89.3%', gemini31: '92.6%', gemini3: '91.8%' } },
                { id: 'mmmu_pro', name: 'MMMU-Pro (Çok Modal)', tooltip: 'Çok disiplinli çok kipli anlama (metin, görsel, çizelge).', values: { opus46: '73.9%', sonnet46: '74.5%', gemini31: '80.5%', gemini3: '81.0%' } },
                { id: 'scicode', name: 'SciCode', tooltip: 'Bilimsel problem çözme; model gerçek bilimsel kod yazabilmeli.', values: { opus46: '52.0%', sonnet46: '47.0%', gemini31: '59.0%', gemini3: '56.0%' } },
                { id: 'charxiv_no_tool', name: 'CharXiv Reasoning (araçsız)', tooltip: 'Grafik anlama ve muhakeme; araç kullanmadan grafik sorularını çözme.', values: { mythos: '86.1%', opus47: '82.1%', opus46: '69.1%' } },
                { id: 'charxiv_tool', name: 'CharXiv Reasoning (araçlı)', tooltip: 'Grafik anlama ve muhakeme; kod araçlarıyla grafik sorularını çözme.', values: { mythos: '93.2%', opus47: '91.0%', opus46: '84.7%' } }
            ]
        },
        {
            name: 'UZUN BAĞLAM (1M Token)',
            id: 'context',
            benchmarks: [
                { id: 'mrcr_1m', name: 'MRCR 1M', tooltip: '128k token bağlamda çok turlu sohbet ve geri çağırma testi (1M sürümü).', values: { opus46: '92.9%', gemini31: '76.3%', deepseek: '83.5%' } },
                { id: 'corpusqa_1m', name: 'CorpusQA 1M', tooltip: '1 milyon token bağlamda geniş belge korpus sorgu ve geri çağırma testi.', values: { opus46: '71.7%', gemini31: '53.8%', deepseek: '62.0%' } }
            ]
        },
        {
            name: 'EYLEMCİ / BİLGİSAYAR KULLANIMI',
            id: 'agentic',
            benchmarks: [
                { id: 'browsecomp', name: 'BrowseComp', tooltip: 'Karmaşık bağımsız web tarama ve bilgi sentezi görevleri.', values: { mythos: '86.9%', opus47: '79.3%', opus46: '83.7%', sonnet46: '74.7%', gpt55: '84.4%', gpt54: '82.7%', gemini31: '85.9%', gemini3: '59.2%', deepseek: '83.4%' } },
                { id: 'osworld', name: 'OSWorld-Verified', tooltip: 'Simüle masaüstü işletim sisteminde gerçekçi bilgisayar kullanım görevleri.', values: { mythos: '79.6%', opus47: '78.0%', opus46: '72.7%', opus45: '66.3%', sonnet46: '72.5%', gpt55: '78.7%', gpt54: '75.0%' } },
                { id: 'hle_tool', name: 'HLE (araçlı)', tooltip: 'Python kod yorumlayıcı aracına erişimle Humanity\'s Last Exam.', values: { mythos: '64.7%', opus47: '54.7%', opus46: '53.3%', sonnet46: '49.0%', gpt55: '52.2%', gpt54: '58.7%', gemini31: '51.4%', deepseek: '48.2%', grok4: '44.4%' } },
                { id: 'gdpval', name: 'GDPval-AA (Elo)', tooltip: 'Eylemci model değerlendirmesi; çok adımlı görev planlama ve API kullanımı.', values: { opus46: '1619', sonnet46: '1633', gpt54: '1674', gemini31: '1317', gemini3: '1195', deepseek: '1554' } },
                { id: 'mcp_atlas', name: 'MCP-Atlas', tooltip: '8 ortamda LLM eylemcileri değerlendirmek için çok görevli sınav.', values: { opus47: '77.3%', opus46: '75.8%', opus45: '62.3%', sonnet46: '61.3%', gpt55: '75.3%', gpt54: '68.1%', gemini31: '69.2%', gemini3: '54.1%', deepseek: '73.6%' } },
                { id: 'toolathlon', name: 'Toolathlon', tooltip: 'Çok araçlı iş akışları ve API entegrasyonunu test eden eylemci sınavı.', values: { opus46: '47.2%', gpt55: '55.6%', gemini31: '48.8%', deepseek: '51.8%' } },
                { id: 'finance_agent', name: 'Finance Agent v1.1', tooltip: 'Finans sektörü eylemci görevleri; analiz, rapor ve karar alma.', values: { opus47: '64.4%', opus46: '60.1%', gpt55: '60.0%', gpt54: '61.5%', gemini31: '59.7%' } },
                { id: 't2_retail', name: 'τ2-bench (Retail)', tooltip: 'Araçlar ve API\'lerle perakende ortamında müşteri hizmetleri eylemci görevleri.', values: { opus46: '91.9%', opus45: '88.9%', sonnet46: '91.7%', gemini31: '90.8%', gemini3: '85.3%' } },
                { id: 't2_telecom', name: 'τ2-bench (Telecom)', tooltip: 'Telekom sektörü müşteri hizmetleri ortamında eylemci görevleri.', values: { opus46: '99.3%', opus45: '98.2%', sonnet46: '97.9%', gemini31: '99.3%', gemini3: '98.0%' } },
                { id: 'vending_bench', name: 'Vending-Bench 2 ($)', tooltip: 'Gerçek iş senaryolarında eylemci model performansını para kazanımıyla ölçer.', values: { opus47: '$10.937', opus46: '$8.018', opus45: '$4.967', sonnet46: '$7.204', gpt55: '$7.524', gpt54: '$6.144', gemini31: '$911', gemini3: '$5.478', deepseek32: '$1.034', grok420: '$4.663' } }
            ]
        },
        {
            name: 'SİBER GÜVENLİK',
            id: 'cyber',
            benchmarks: [
                { id: 'cybergym', name: 'CyberGym', tooltip: 'Gerçek CTF yarışmalarından Bayrak-Yakala siber güvenlik meydan okumaları.', values: { mythos: '83.1%', opus47: '73.1%', opus46: '73.8%', gpt55: '81.8%', gpt54: '66.3%' } }
            ]
        }
    ]
};
