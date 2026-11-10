// Kaynak: prof-oguzergin/ai-model-timeline, tablo tarihi 28 Ekim 2026. hidden: true olan eski modeller sayfada gösterilmez.
const LLM_DATA = {
    "models": [
        {
            "id": "opus55",
            "name": "Opus 5.5",
            "company": "Anthropic",
            "date": "Eyl 26",
            "color": "#f97316"
        },
        {
            "id": "fable51",
            "name": "Fable 5.1",
            "company": "Anthropic",
            "date": "Eyl 26",
            "color": "#a855f7"
        },
        {
            "id": "fable5",
            "name": "Fable 5",
            "company": "Anthropic",
            "date": "Haz 26",
            "color": "#71717a",
            "hidden": true
        },
        {
            "id": "mythospreview",
            "name": "Mythos Preview",
            "company": "Anthropic",
            "date": "Nis 26",
            "color": "#71717a",
            "hidden": true
        },
        {
            "id": "opus5",
            "name": "Opus 5",
            "company": "Anthropic",
            "date": "Tem 26",
            "color": "#71717a",
            "hidden": true
        },
        {
            "id": "opus48",
            "name": "Opus 4.8",
            "company": "Anthropic",
            "date": "May 26",
            "color": "#71717a",
            "hidden": true
        },
        {
            "id": "opus47",
            "name": "Opus 4.7",
            "company": "Anthropic",
            "date": "Nis 26",
            "color": "#71717a",
            "hidden": true
        },
        {
            "id": "opus46",
            "name": "Opus 4.6",
            "company": "Anthropic",
            "date": "Şub 26",
            "color": "#71717a",
            "hidden": true
        },
        {
            "id": "opus45",
            "name": "Opus 4.5",
            "company": "Anthropic",
            "date": "Kas 25",
            "color": "#71717a",
            "hidden": true
        },
        {
            "id": "sonnet55",
            "name": "Sonnet 5.5",
            "company": "Anthropic",
            "date": "Eyl 26",
            "color": "#fb923c"
        },
        {
            "id": "sonnet5",
            "name": "Sonnet 5",
            "company": "Anthropic",
            "date": "Haz 26",
            "color": "#71717a",
            "hidden": true
        },
        {
            "id": "sonnet46",
            "name": "Sonnet 4.6",
            "company": "Anthropic",
            "date": "Şub 26",
            "color": "#71717a",
            "hidden": true
        },
        {
            "id": "haiku55",
            "name": "Haiku 5.5",
            "company": "Anthropic",
            "date": "Eki 26",
            "color": "#fdba74"
        },
        {
            "id": "gpt61sol",
            "name": "GPT 6.1 Sol",
            "company": "OpenAI",
            "date": "Eyl 26",
            "color": "#10b981"
        },
        {
            "id": "gpt6astra",
            "name": "GPT 6 Astra",
            "company": "OpenAI",
            "date": "Eyl 26",
            "color": "#34d399"
        },
        {
            "id": "gpt56sol",
            "name": "GPT 5.6 Sol",
            "company": "OpenAI",
            "date": "Haz 26",
            "color": "#71717a",
            "hidden": true
        },
        {
            "id": "gpt55",
            "name": "GPT 5.5",
            "company": "OpenAI",
            "date": "Nis 26",
            "color": "#71717a",
            "hidden": true
        },
        {
            "id": "gpt54",
            "name": "GPT 5.4",
            "company": "OpenAI",
            "date": "Mar 26",
            "color": "#71717a",
            "hidden": true
        },
        {
            "id": "gemini4carbon",
            "name": "Gemini 4 Carbon",
            "company": "Google",
            "date": "Eki 26",
            "color": "#3b82f6"
        },
        {
            "id": "gemini4argon",
            "name": "Gemini 4 Argon",
            "company": "Google",
            "date": "Eyl 26",
            "color": "#60a5fa"
        },
        {
            "id": "gemini38flash",
            "name": "Gemini 3.8 Flash",
            "company": "Google",
            "date": "Eyl 26",
            "color": "#93c5fd"
        },
        {
            "id": "gemini37flash",
            "name": "Gemini 3.7 Flash",
            "company": "Google",
            "date": "Ağu 26",
            "color": "#71717a",
            "hidden": true
        },
        {
            "id": "gemini36flash",
            "name": "Gemini 3.6 Flash",
            "company": "Google",
            "date": "Tem 26",
            "color": "#71717a",
            "hidden": true
        },
        {
            "id": "gemini35flash",
            "name": "Gemini 3.5 Flash",
            "company": "Google",
            "date": "May 26",
            "color": "#71717a",
            "hidden": true
        },
        {
            "id": "gemini31pro",
            "name": "Gemini 3.1 Pro",
            "company": "Google",
            "date": "Şub 26",
            "color": "#71717a",
            "hidden": true
        },
        {
            "id": "gemini3pro",
            "name": "Gemini 3 Pro",
            "company": "Google",
            "date": "Kas 25",
            "color": "#71717a",
            "hidden": true
        },
        {
            "id": "deepseekv41flash",
            "name": "DeepSeek V4.1 Flash",
            "company": "DeepSeek",
            "date": "Eyl 26",
            "color": "#ef4444"
        },
        {
            "id": "deepseekv4pro0813",
            "name": "DeepSeek V4-Pro 0813",
            "company": "DeepSeek",
            "date": "Ağu 26",
            "color": "#f87171"
        },
        {
            "id": "deepseekv4pro",
            "name": "DeepSeek V4-Pro",
            "company": "DeepSeek",
            "date": "Nis 26",
            "color": "#71717a",
            "hidden": true
        },
        {
            "id": "deepseekv32",
            "name": "DeepSeek V3.2",
            "company": "DeepSeek",
            "date": "Ara 25",
            "color": "#71717a",
            "hidden": true
        },
        {
            "id": "deepseekv3",
            "name": "DeepSeek V3",
            "company": "DeepSeek",
            "date": "Ara 24",
            "color": "#71717a",
            "hidden": true
        },
        {
            "id": "grok47",
            "name": "Grok 4.7",
            "company": "xAI",
            "date": "Eyl 26",
            "color": "#06b6d4"
        },
        {
            "id": "grok46",
            "name": "Grok 4.6",
            "company": "xAI",
            "date": "Ağu 26",
            "color": "#71717a",
            "hidden": true
        },
        {
            "id": "grok45",
            "name": "Grok 4.5",
            "company": "xAI",
            "date": "Tem 26",
            "color": "#71717a",
            "hidden": true
        },
        {
            "id": "grok43",
            "name": "Grok 4.3",
            "company": "xAI",
            "date": "Nis 26",
            "color": "#71717a",
            "hidden": true
        },
        {
            "id": "grok420",
            "name": "Grok 4.20",
            "company": "xAI",
            "date": "Şub 26",
            "color": "#71717a",
            "hidden": true
        },
        {
            "id": "grok4",
            "name": "Grok 4",
            "company": "xAI",
            "date": "Tem 25",
            "color": "#71717a",
            "hidden": true
        }
    ],
    "companies": [
        {
            "name": "Anthropic",
            "ids": [
                "opus55",
                "fable51",
                "fable5",
                "mythospreview",
                "opus5",
                "opus48",
                "opus47",
                "opus46",
                "opus45",
                "sonnet55",
                "sonnet5",
                "sonnet46",
                "haiku55"
            ],
            "color": "#f97316"
        },
        {
            "name": "OpenAI",
            "ids": [
                "gpt61sol",
                "gpt6astra",
                "gpt56sol",
                "gpt55",
                "gpt54"
            ],
            "color": "#10b981"
        },
        {
            "name": "Google",
            "ids": [
                "gemini4carbon",
                "gemini4argon",
                "gemini38flash",
                "gemini37flash",
                "gemini36flash",
                "gemini35flash",
                "gemini31pro",
                "gemini3pro"
            ],
            "color": "#3b82f6"
        },
        {
            "name": "DeepSeek",
            "ids": [
                "deepseekv41flash",
                "deepseekv4pro0813",
                "deepseekv4pro",
                "deepseekv32",
                "deepseekv3"
            ],
            "color": "#ef4444"
        },
        {
            "name": "xAI",
            "ids": [
                "grok47",
                "grok46",
                "grok45",
                "grok43",
                "grok420",
                "grok4"
            ],
            "color": "#06b6d4"
        }
    ],
    "categories": [
        {
            "name": "YAZILIM GELİŞTİRME / KODLAMA",
            "id": "c0",
            "benchmarks": [
                {
                    "id": "swe_bench_verified",
                    "name": "SWE-bench Verified",
                    "tooltip": "Gerçek GitHub issueları; model kodu düzeltip testlerden geçirmeli.",
                    "values": {
                        "fable5": "95.5%",
                        "mythospreview": "93.9%",
                        "opus5": "96.0%",
                        "opus48": "88.6%",
                        "opus47": "87.6%",
                        "opus46": "80.8%",
                        "opus45": "80.9%",
                        "sonnet5": "85.2%",
                        "sonnet46": "79.6%",
                        "gpt54": "77.2%",
                        "gemini31pro": "80.6%",
                        "gemini3pro": "76.2%",
                        "deepseekv4pro": "80.6%",
                        "deepseekv3": "42.0%",
                        "grok4": "72.0%"
                    }
                },
                {
                    "id": "swe_bench_pro",
                    "name": "SWE-bench Pro",
                    "tooltip": "SWE-bench'in daha zor pro sürümü; gerçek yazılım mühendisliği görevleri.",
                    "values": {
                        "opus55": "89.9%",
                        "fable51": "81.2%",
                        "fable5": "80.3%",
                        "mythospreview": "77.8%",
                        "opus5": "79.2%",
                        "opus48": "69.2%",
                        "opus47": "64.3%",
                        "opus46": "53.4%",
                        "sonnet55": "81.3%",
                        "sonnet5": "63.2%",
                        "haiku55": "64.8%",
                        "gpt55": "58.6%",
                        "gpt54": "57.7%",
                        "gemini35flash": "55.1%",
                        "gemini31pro": "54.2%",
                        "gemini3pro": "43.3%",
                        "deepseekv4pro": "55.4%",
                        "grok45": "64.7%"
                    }
                },
                {
                    "id": "swe_bench_multilingual",
                    "name": "SWE-bench Multilingual",
                    "tooltip": "Çok dilli kod düzenleme sınavı: Python, Rust, C++, Go, JS.",
                    "values": {
                        "opus55": "93.9%",
                        "fable51": "89.1%",
                        "fable5": "86.6%",
                        "mythospreview": "87.3%",
                        "opus5": "89.5%",
                        "opus48": "84.4%",
                        "opus47": "80.5%",
                        "opus46": "77.5%",
                        "sonnet55": "90.3%",
                        "sonnet5": "78.3%",
                        "haiku55": "83.7%",
                        "deepseekv4pro": "76.2%",
                        "grok45": "78.0%"
                    }
                },
                {
                    "id": "swe_bench_multimodal",
                    "name": "SWE-bench Multimodal",
                    "tooltip": "Görsel ve kod içeren çok kipli yazılım mühendisliği görevleri.",
                    "values": {
                        "opus55": "61.4%",
                        "fable51": "54.7%",
                        "fable5": "54.1%",
                        "mythospreview": "59.0%",
                        "opus5": "59.4%",
                        "opus48": "38.4%",
                        "opus47": "34.5%",
                        "opus46": "27.1%",
                        "sonnet55": "54.3%",
                        "sonnet5": "28.1%",
                        "haiku55": "30.7%"
                    }
                },
                {
                    "id": "deepswe_v1_1",
                    "name": "DeepSWE v1.1",
                    "tooltip": "Datacurve; 91 acik kaynak deposundan 113 uzun ufuklu yazilim gorevi. Kamu siralamasi (llm-stats). Fable 5.1 henuz siralamada yok; Anthropic kendi bes denemeli olcumunde %67.4 bildiriyor.",
                    "values": {
                        "fable5": "70.0%",
                        "opus5": "68.8%",
                        "opus48": "59.0%",
                        "sonnet5": "54.0%",
                        "sonnet46": "30.0%",
                        "gpt6astra": "74.1%",
                        "gpt56sol": "73.0%",
                        "gpt55": "67.0%",
                        "gpt54": "52.0%",
                        "gemini38flash": "73.7%",
                        "gemini37flash": "65.3%",
                        "gemini36flash": "49.0%",
                        "gemini35flash": "37.0%",
                        "gemini31pro": "12.0%",
                        "grok46": "65.9%",
                        "grok45": "54.0%"
                    }
                },
                {
                    "id": "terminal_bench_2_0",
                    "name": "Terminal-Bench 2.0",
                    "tooltip": "Karmaşık terminal görevleri; kabuk komutları ve dosya işlemleri gerektirir.",
                    "values": {
                        "mythospreview": "82.0%",
                        "opus47": "69.4%",
                        "opus46": "65.4%",
                        "opus45": "59.3%",
                        "sonnet46": "59.1%",
                        "gpt55": "82.7%",
                        "gpt54": "75.1%",
                        "gemini31pro": "68.5%",
                        "gemini3pro": "56.9%",
                        "deepseekv4pro": "67.9%",
                        "deepseekv32": "46.4%"
                    }
                },
                {
                    "id": "terminal_bench_2_1",
                    "name": "Terminal-Bench 2.1",
                    "tooltip": "Terminal-Bench'in 2.1 sürümü; karmaşık terminal görevleri.",
                    "values": {
                        "fable5": "88.0%",
                        "mythospreview": "78.0%",
                        "opus5": "89.1%",
                        "opus48": "82.7%",
                        "opus47": "66.1%",
                        "sonnet5": "80.4%",
                        "gpt56sol": "88.8%",
                        "gpt55": "83.4%",
                        "gemini37flash": "85.8%",
                        "gemini35flash": "76.2%",
                        "gemini31pro": "70.7%",
                        "deepseekv41flash": "90.6%",
                        "deepseekv4pro0813": "87.9%"
                    }
                },
                {
                    "id": "terminal_bench_4_0",
                    "name": "Terminal-Bench 4.0",
                    "tooltip": "Terminal-Bench 4.0; 66 gorev, bilim yanli ve on cephe muhendisligi agirlikli. Onceki surumlerin zaman asimi ve kaynak duyarliligi giderildi.",
                    "values": {
                        "fable51": "57.9%",
                        "fable5": "44.5%",
                        "opus5": "51.8%",
                        "opus48": "23.6%",
                        "sonnet5": "12.4%",
                        "gpt6astra": "58.2%",
                        "gpt56sol": "37.3%",
                        "gemini38flash": "19.1%",
                        "gemini37flash": "11.2%",
                        "grok46": "20.3%",
                        "grok45": "12.4%"
                    }
                },
                {
                    "id": "terminal_bench_hard",
                    "name": "Terminal-Bench Hard",
                    "tooltip": "Zorlu terminal/agent görevleri (Terminal-Bench Hard). Kaynak: artificialanalysis.ai bağımsız ölçümü (tek tip kaynak).",
                    "values": {
                        "fable5": "62.9%",
                        "opus48": "58.3%",
                        "opus47": "51.5%",
                        "opus46": "46.2%",
                        "opus45": "47.0%",
                        "sonnet46": "53.0%",
                        "gpt56sol": "65.9%",
                        "gpt55": "60.6%",
                        "gpt54": "57.6%",
                        "gemini35flash": "39.4%",
                        "gemini31pro": "53.8%",
                        "gemini3pro": "41.7%",
                        "deepseekv4pro": "46.2%",
                        "deepseekv32": "35.6%",
                        "deepseekv3": "6.8%",
                        "grok43": "37.9%",
                        "grok420": "37.9%",
                        "grok4": "37.9%"
                    }
                },
                {
                    "id": "terminal_bench_science_0_1",
                    "name": "Terminal-Bench-Science 0.1",
                    "tooltip": "Stanford onculugunde topluluk kiyasi; yasam, fizik, yer, matematik ve muhendislik bilimlerinden 70 arastirma gorevi. Kamu siralamasi. Fable 5.1 henuz siralamada yok; Anthropic kendi olcumunde %52.6 bildiriyor.",
                    "values": {
                        "fable5": "21.4%",
                        "opus5": "30.0%",
                        "opus48": "10.5%",
                        "gpt56sol": "22.4%",
                        "grok46": "7.1%"
                    }
                },
                {
                    "id": "frontiercode_diamond",
                    "name": "FrontierCode (Diamond)",
                    "tooltip": "Cognition'ın sınır zorlukta gerçek dünya kodlama değerlendirmesi (Diamond seti).",
                    "values": {
                        "fable5": "29.3%",
                        "opus48": "13.4%",
                        "gpt55": "5.7%"
                    }
                },
                {
                    "id": "cursorbench_3_2",
                    "name": "CursorBench 3.2",
                    "tooltip": "Cursor'un etmen tabanli kodlama kiyasi; gercek Cursor kullanimindan derlenen gorevler, Cursor'un uretim kosumunda uctan uca calistirilir. Her model icin en yuksek akil yurutme kademesi.",
                    "values": {
                        "fable51": "73.4%",
                        "fable5": "70.5%",
                        "opus5": "70.0%",
                        "opus48": "62.3%",
                        "sonnet5": "61.5%",
                        "gpt56sol": "67.2%",
                        "gpt55": "58.4%",
                        "gemini38flash": "69.2%",
                        "gemini37flash": "61.6%",
                        "grok46": "70.8%"
                    }
                },
                {
                    "id": "livecodebench",
                    "name": "LiveCodeBench",
                    "tooltip": "Model eğitim kesiminden sonra toplanan yarışmacı programlama problemleri.",
                    "values": {
                        "opus46": "88.8%",
                        "gemini31pro": "91.7%",
                        "deepseekv4pro": "93.5%",
                        "deepseekv32": "49.2%",
                        "deepseekv3": "40.5%",
                        "grok4": "79.0%"
                    }
                },
                {
                    "id": "codeforces_elo",
                    "name": "Codeforces (Elo)",
                    "tooltip": "Codeforces yarışmacı programlama problemlerini çözerek kazanılan Elo puanı.",
                    "values": {
                        "gpt54": "3168",
                        "gemini31pro": "3052",
                        "deepseekv4pro": "3206"
                    }
                }
            ]
        },
        {
            "name": "GENEL BİLGİ & AKIL YÜRÜTME · FEN & BİLİM",
            "id": "c2",
            "benchmarks": [
                {
                    "id": "gpqa_diamond",
                    "name": "GPQA Diamond",
                    "tooltip": "198 doktora seviyesi bilim sorusu (biyoloji, fizik, kimya). Kaynak: artificialanalysis.ai bağımsız ölçümü (tek tip kaynak).",
                    "values": {
                        "fable51": "93.7%",
                        "fable5": "92.6%",
                        "opus5": "93.2%",
                        "opus48": "92.0%",
                        "opus47": "91.4%",
                        "opus46": "89.6%",
                        "opus45": "86.6%",
                        "sonnet5": "91.1%",
                        "sonnet46": "87.5%",
                        "gpt6astra": "96.1%",
                        "gpt56sol": "94.1%",
                        "gpt55": "93.5%",
                        "gpt54": "92.0%",
                        "gemini38flash": "95.3%",
                        "gemini37flash": "92.1%",
                        "gemini36flash": "92.8%",
                        "gemini35flash": "92.1%",
                        "gemini31pro": "94.1%",
                        "gemini3pro": "90.8%",
                        "deepseekv4pro0813": "92.8%",
                        "deepseekv4pro": "92.8%",
                        "deepseekv32": "84.0%",
                        "deepseekv3": "55.7%",
                        "grok46": "94.9%",
                        "grok45": "93.1%",
                        "grok43": "90.1%",
                        "grok420": "91.1%",
                        "grok4": "87.7%"
                    }
                },
                {
                    "id": "critpt",
                    "name": "CritPt",
                    "tooltip": "Doktora düzeyi fizik araştırma problemleri. Kaynak: artificialanalysis.ai bağımsız ölçümü (tek tip kaynak).",
                    "values": {
                        "opus55": "31.7%",
                        "fable51": "29.7%",
                        "fable5": "28.6%",
                        "opus5": "29.1%",
                        "opus48": "20.9%",
                        "opus47": "12.0%",
                        "opus46": "12.6%",
                        "opus45": "4.6%",
                        "sonnet55": "31.4%",
                        "sonnet5": "16.9%",
                        "sonnet46": "3.1%",
                        "haiku55": "18.9%",
                        "gpt61sol": "31.7%",
                        "gpt6astra": "31.7%",
                        "gpt56sol": "32.3%",
                        "gpt55": "27.1%",
                        "gpt54": "23.4%",
                        "gemini4carbon": "36.0%",
                        "gemini4argon": "27.1%",
                        "gemini38flash": "18.3%",
                        "gemini37flash": "9.4%",
                        "gemini36flash": "10.6%",
                        "gemini35flash": "10.9%",
                        "gemini31pro": "17.7%",
                        "gemini3pro": "9.1%",
                        "deepseekv41flash": "14.3%",
                        "deepseekv4pro0813": "18.0%",
                        "deepseekv4pro": "18.0%",
                        "deepseekv32": "2.9%",
                        "deepseekv3": "0.0%",
                        "grok47": "17.7%",
                        "grok46": "17.1%",
                        "grok45": "15.4%",
                        "grok43": "8.0%",
                        "grok420": "6.6%",
                        "grok4": "2.0%"
                    }
                },
                {
                    "id": "scicode",
                    "name": "SciCode",
                    "tooltip": "Bilimsel problem çözme; model gerçek bilimsel kod yazabilmeli. Kaynak: artificialanalysis.ai bağımsız ölçümü (tek tip kaynak).",
                    "values": {
                        "opus55": "66.9%",
                        "fable51": "63.1%",
                        "fable5": "61.0%",
                        "opus5": "56.4%",
                        "opus48": "54.4%",
                        "opus47": "54.5%",
                        "opus46": "51.9%",
                        "opus45": "49.5%",
                        "sonnet55": "61.0%",
                        "sonnet5": "54.3%",
                        "sonnet46": "50.1%",
                        "haiku55": "55.0%",
                        "gpt61sol": "54.2%",
                        "gpt6astra": "56.5%",
                        "gpt56sol": "57.1%",
                        "gpt55": "55.8%",
                        "gpt54": "56.6%",
                        "gemini4carbon": "64.2%",
                        "gemini4argon": "61.8%",
                        "gemini38flash": "56.6%",
                        "gemini37flash": "59.8%",
                        "gemini36flash": "53.4%",
                        "gemini35flash": "53.1%",
                        "gemini31pro": "58.7%",
                        "gemini3pro": "56.1%",
                        "deepseekv41flash": "51.9%",
                        "deepseekv4pro0813": "51.0%",
                        "deepseekv4pro": "51.0%",
                        "deepseekv32": "38.9%",
                        "deepseekv3": "35.4%",
                        "grok47": "57.4%",
                        "grok46": "56.5%",
                        "grok45": "55.0%",
                        "grok43": "48.3%",
                        "grok420": "45.6%",
                        "grok4": "45.7%"
                    }
                },
                {
                    "id": "humanity_s_last_exam",
                    "name": "Humanity's Last Exam",
                    "tooltip": "100'den fazla alanda uzmanlar tarafından yazılmış 3000 soru; mevcut yapay zekâları yenmek için tasarlandı. Kaynak: artificialanalysis.ai bağımsız ölçümü (tek tip kaynak, araçsız).",
                    "values": {
                        "opus55": "61.4%",
                        "fable51": "59.1%",
                        "fable5": "55.5%",
                        "opus5": "54.9%",
                        "opus48": "48.7%",
                        "opus47": "42.3%",
                        "opus46": "39.9%",
                        "opus45": "30.1%",
                        "sonnet55": "55.0%",
                        "sonnet5": "41.3%",
                        "sonnet46": "33.6%",
                        "haiku55": "44.4%",
                        "gpt61sol": "52.9%",
                        "gpt6astra": "54.7%",
                        "gpt56sol": "49.5%",
                        "gpt55": "45.8%",
                        "gpt54": "43.7%",
                        "gemini4argon": "57.1%",
                        "gemini38flash": "47.8%",
                        "gemini37flash": "39.0%",
                        "gemini36flash": "40.8%",
                        "gemini35flash": "41.3%",
                        "gemini31pro": "47.0%",
                        "gemini3pro": "37.2%",
                        "deepseekv41flash": "39.2%",
                        "deepseekv4pro0813": "41.0%",
                        "deepseekv4pro": "41.0%",
                        "deepseekv32": "22.2%",
                        "deepseekv3": "3.6%",
                        "grok47": "43.1%",
                        "grok46": "42.9%",
                        "grok45": "42.7%",
                        "grok43": "37.2%",
                        "grok420": "32.2%",
                        "grok4": "23.9%"
                    }
                },
                {
                    "id": "blueprint_bench_2",
                    "name": "Blueprint-Bench 2",
                    "tooltip": "Eylemci mekânsal akıl yürütme; teknik çizim ve plan anlama.",
                    "values": {
                        "fable5": "38.6%",
                        "opus48": "14.5%",
                        "opus47": "24.5%",
                        "sonnet46": "6.7%",
                        "gpt55": "36.2%",
                        "gemini35flash": "33.6%",
                        "gemini31pro": "26.5%"
                    }
                }
            ]
        },
        {
            "name": "GENEL BİLGİ & AKIL YÜRÜTME · SAĞLIK & BİYOMEDİKAL",
            "id": "c3",
            "benchmarks": [
                {
                    "id": "healthbench",
                    "name": "HealthBench",
                    "tooltip": "Sağlık alanında soru yanıtlama ve klinik senaryolar.",
                    "values": {
                        "fable5": "62.7%",
                        "mythospreview": "61.1%",
                        "opus5": "57.8%",
                        "opus48": "59.3%",
                        "sonnet5": "58.7%",
                        "gpt56sol": "57.0%",
                        "gpt55": "56.5%"
                    }
                },
                {
                    "id": "healthbench_professional",
                    "name": "HealthBench Professional",
                    "tooltip": "Uzman hekim düzeyi klinik senaryolar (Mythos 5 değeri; kalkanlı Fable daha düşük).",
                    "values": {
                        "opus55": "65.6%",
                        "fable51": "62.1%",
                        "fable5": "66.0%",
                        "mythospreview": "64.7%",
                        "opus5": "59.8%",
                        "opus48": "56.9%",
                        "sonnet55": "69.2%",
                        "sonnet5": "57.8%",
                        "haiku55": "64.8%",
                        "gpt6astra": "63.4%",
                        "gpt56sol": "60.5%",
                        "gpt55": "51.8%"
                    }
                },
                {
                    "id": "biomysterybench_human",
                    "name": "BioMysteryBench (insan)",
                    "tooltip": "Biyoloji araştırma bulmacaları; insanların çözebildiği küme (Mythos 5 değeri).",
                    "values": {
                        "fable5": "83.9%",
                        "mythospreview": "82.6%",
                        "opus48": "80.4%"
                    }
                },
                {
                    "id": "biomysterybench_hard",
                    "name": "BioMysteryBench (zor)",
                    "tooltip": "Biyoloji araştırma bulmacaları; zor küme (Mythos 5 değeri; kalkanlı Fable daha düşük).",
                    "values": {
                        "fable5": "46.1%",
                        "mythospreview": "29.6%",
                        "opus48": "40.0%"
                    }
                }
            ]
        },
        {
            "name": "GENEL BİLGİ & AKIL YÜRÜTME · BİLGİ & GERÇEKLİK",
            "id": "c4",
            "benchmarks": [
                {
                    "id": "mmlu_pro",
                    "name": "MMLU-Pro",
                    "tooltip": "14 disiplinde 12 bin çok seçmeli soru, MMLU'dan zor.",
                    "values": {
                        "opus46": "89.1%",
                        "gpt54": "87.5%",
                        "gemini31pro": "91.0%",
                        "deepseekv4pro": "87.5%",
                        "deepseekv32": "81.2%",
                        "deepseekv3": "75.9%"
                    }
                },
                {
                    "id": "mmmlu_multilingual",
                    "name": "MMMLU (Çok Dilli)",
                    "tooltip": "Çok dilli MMLU; modelin farklı dillerdeki bilgi ve muhakeme kapasitesini ölçer.",
                    "values": {
                        "mythospreview": "92.7%",
                        "opus47": "91.5%",
                        "opus46": "91.1%",
                        "opus45": "90.8%",
                        "sonnet46": "89.3%",
                        "gemini31pro": "92.6%",
                        "gemini3pro": "91.8%"
                    }
                },
                {
                    "id": "simpleqa_verified",
                    "name": "SimpleQA-Verified",
                    "tooltip": "Tek doğru yanıtı olan kısa bilgi soruları; halüsinasyon testi.",
                    "values": {
                        "opus46": "46.2%",
                        "gpt54": "45.3%",
                        "gemini31pro": "75.6%",
                        "deepseekv4pro": "57.9%",
                        "deepseekv3": "24.9%"
                    }
                },
                {
                    "id": "chinese_simpleqa",
                    "name": "Chinese-SimpleQA",
                    "tooltip": "Çince bilgi soruları için halüsinasyon testi.",
                    "values": {
                        "opus46": "76.2%",
                        "gpt54": "76.8%",
                        "gemini31pro": "85.9%",
                        "deepseekv4pro": "84.4%",
                        "deepseekv3": "64.8%"
                    }
                },
                {
                    "id": "ifbench",
                    "name": "IFBench",
                    "tooltip": "Yönerge ve format kurallarına tam uyum (instruction following). Kaynak: artificialanalysis.ai bağımsız ölçümü (tek tip kaynak).",
                    "values": {
                        "fable5": "63.5%",
                        "opus48": "62.2%",
                        "opus47": "58.6%",
                        "opus46": "53.1%",
                        "opus45": "58.0%",
                        "sonnet46": "56.6%",
                        "gpt56sol": "72.7%",
                        "gpt55": "75.9%",
                        "gpt54": "73.9%",
                        "gemini35flash": "74.6%",
                        "gemini31pro": "77.1%",
                        "gemini3pro": "70.4%",
                        "deepseekv4pro": "76.5%",
                        "deepseekv32": "60.7%",
                        "deepseekv3": "34.8%",
                        "grok43": "81.3%",
                        "grok420": "81.2%",
                        "grok4": "53.7%"
                    }
                }
            ]
        },
        {
            "name": "GENEL BİLGİ & AKIL YÜRÜTME · SOYUT AKIL YÜRÜTME (ARC-AGI)",
            "id": "c5",
            "benchmarks": [
                {
                    "id": "arc_agi_1",
                    "name": "ARC-AGI-1",
                    "tooltip": "Yeni desen çıkarımını test eden soyut görsel bulmacalar (2019 orijinal).",
                    "values": {
                        "fable51": "97.5%",
                        "fable5": "98.5%",
                        "mythospreview": "91.2%",
                        "opus5": "97.5%",
                        "opus48": "92.5%",
                        "opus47": "93.5%",
                        "opus46": "93.0%",
                        "opus45": "80.0%",
                        "sonnet5": "87.5%",
                        "sonnet46": "86.5%",
                        "gpt56sol": "97.5%",
                        "gpt55": "95.0%",
                        "gpt54": "93.7%",
                        "gemini37flash": "87.2%",
                        "gemini35flash": "92.5%",
                        "gemini31pro": "98.0%",
                        "gemini3pro": "75.0%",
                        "deepseekv32": "57.0%",
                        "grok420": "89.5%",
                        "grok4": "66.6%"
                    }
                },
                {
                    "id": "arc_agi_2",
                    "name": "ARC-AGI-2",
                    "tooltip": "Daha derin muhakeme gerektiren ikinci nesil ARC bulmacaları.",
                    "values": {
                        "fable51": "90.0%",
                        "fable5": "89.2%",
                        "mythospreview": "60.4%",
                        "opus5": "90.4%",
                        "opus48": "72.1%",
                        "opus47": "75.8%",
                        "opus46": "68.8%",
                        "opus45": "37.6%",
                        "sonnet5": "67.1%",
                        "sonnet46": "60.4%",
                        "gpt56sol": "92.5%",
                        "gpt55": "85.0%",
                        "gpt54": "74.0%",
                        "gemini37flash": "52.6%",
                        "gemini35flash": "72.1%",
                        "gemini31pro": "77.1%",
                        "gemini3pro": "31.1%",
                        "deepseekv32": "4.0%",
                        "grok420": "65.1%",
                        "grok4": "15.9%"
                    }
                },
                {
                    "id": "arc_agi_3",
                    "name": "ARC-AGI-3",
                    "tooltip": "Etkileşimli oyun benzeri ortamlar içeren en yeni ARC sürümü.",
                    "values": {
                        "fable5": "2.1%",
                        "mythospreview": "0.3%",
                        "opus5": "30.2%",
                        "opus48": "1.5%",
                        "opus47": "0.2%",
                        "opus46": "0.5%",
                        "gpt56sol": "7.8%",
                        "gpt55": "0.4%",
                        "gpt54": "0.2%",
                        "gemini31pro": "0.4%",
                        "grok420": "0.1%"
                    }
                }
            ]
        },
        {
            "name": "GENEL BİLGİ & AKIL YÜRÜTME · ÇOK BİÇİMLİ & GÖRSEL",
            "id": "c6",
            "benchmarks": [
                {
                    "id": "mmmu_pro_multimodal",
                    "name": "MMMU-Pro (Çok Modal)",
                    "tooltip": "Çok disiplinli çok kipli anlama (metin, görsel, çizelge).",
                    "values": {
                        "opus46": "73.9%",
                        "sonnet46": "74.5%",
                        "gpt55": "81.2%",
                        "gpt54": "81.2%",
                        "gemini35flash": "83.6%",
                        "gemini31pro": "80.5%",
                        "gemini3pro": "81.0%"
                    }
                },
                {
                    "id": "charxiv_reasoning_no_tools",
                    "name": "CharXiv Reasoning (araçsız)",
                    "tooltip": "Grafik anlama ve muhakeme; araç kullanmadan grafik sorularını çözme.",
                    "values": {
                        "fable5": "88.9%",
                        "mythospreview": "86.1%",
                        "opus47": "82.1%",
                        "opus46": "69.1%",
                        "gemini35flash": "84.2%"
                    }
                },
                {
                    "id": "charxiv_reasoning_with_tools",
                    "name": "CharXiv Reasoning (araçlı)",
                    "tooltip": "Grafik anlama ve muhakeme; kod araçlarıyla grafik sorularını çözme.",
                    "values": {
                        "fable5": "93.5%",
                        "mythospreview": "93.2%",
                        "opus47": "91.0%",
                        "opus46": "84.7%"
                    }
                },
                {
                    "id": "chartqapro_no_tools",
                    "name": "ChartQAPro (araçsız)",
                    "tooltip": "Grafik soru-cevap; araç kullanmadan.",
                    "values": {
                        "opus48": "69.4%",
                        "opus47": "67.6%"
                    }
                },
                {
                    "id": "chartqapro_with_tools",
                    "name": "ChartQAPro (araçlı)",
                    "tooltip": "Grafik soru-cevap; kod araçlarıyla.",
                    "values": {
                        "opus48": "72.3%",
                        "opus47": "69.8%"
                    }
                }
            ]
        },
        {
            "name": "MATEMATİK",
            "id": "c7",
            "benchmarks": [
                {
                    "id": "aime_2025",
                    "name": "AIME 2025",
                    "tooltip": "Amerikan Davetli Matematik Sınavı; 15 zorlu lise matematik problemi (araç yok).",
                    "values": {
                        "opus46": "99.8%",
                        "gemini31pro": "98.1%",
                        "gemini3pro": "95.0%",
                        "deepseekv32": "96.0%",
                        "grok4": "91.7%"
                    }
                },
                {
                    "id": "aime_2026",
                    "name": "AIME 2026",
                    "tooltip": "Amerikan Davetli Matematik Sınavı 2026; 15 zorlu lise matematik problemi (araç yok).",
                    "values": {
                        "opus47": "95.8%",
                        "opus46": "96.7%",
                        "opus45": "95.1%",
                        "gpt55": "97.5%",
                        "gpt54": "99.2%",
                        "gemini31pro": "98.3%",
                        "gemini3pro": "91.7%",
                        "deepseekv4pro": "95.8%",
                        "deepseekv32": "94.2%"
                    }
                },
                {
                    "id": "usamo_2026",
                    "name": "USAMO 2026",
                    "tooltip": "ABD Matematik Olimpiyatı; 6 ispat sorusu, 2 gün, cevap değil tam ispat yazılmalı (en zor lise matematik sınavı).",
                    "values": {
                        "mythospreview": "97.6%",
                        "opus46": "66.2%",
                        "gpt54": "95.2%",
                        "gemini31pro": "74.4%"
                    }
                },
                {
                    "id": "hmmt_2026_feb",
                    "name": "HMMT 2026 Feb",
                    "tooltip": "Harvard-MIT Matematik Turnuvası; ileri lise ve erken lisans matematiği.",
                    "values": {
                        "opus46": "96.2%",
                        "gpt54": "97.7%",
                        "gemini31pro": "94.7%",
                        "deepseekv4pro": "95.2%"
                    }
                },
                {
                    "id": "imoanswerbench",
                    "name": "IMOAnswerBench",
                    "tooltip": "IMO sorularının sayısal cevaplarını test eden matematik ölçümü.",
                    "values": {
                        "opus46": "75.3%",
                        "gpt54": "91.4%",
                        "gemini31pro": "81.0%",
                        "deepseekv4pro": "89.8%"
                    }
                },
                {
                    "id": "apex",
                    "name": "Apex",
                    "tooltip": "Uzman matematikçiler tarafından hazırlanan araştırma seviyesi matematik problemleri.",
                    "values": {
                        "opus46": "34.5%",
                        "gpt54": "54.1%",
                        "gemini31pro": "60.9%",
                        "gemini3pro": "18.4%",
                        "deepseekv4pro": "38.3%"
                    }
                },
                {
                    "id": "apex_shortlist",
                    "name": "Apex Shortlist",
                    "tooltip": "Uzman matematikçiler tarafından hazırlanan araştırma seviyesi matematik problemleri (kısaltılmış liste).",
                    "values": {
                        "opus46": "85.9%",
                        "gpt54": "78.1%",
                        "gemini31pro": "89.1%",
                        "deepseekv4pro": "90.2%"
                    }
                },
                {
                    "id": "arxivmath",
                    "name": "ArxivMath",
                    "tooltip": "arXiv makalelerinden türetilmiş matematik problemleri.",
                    "values": {
                        "fable5": "78.5%",
                        "mythospreview": "68.7%",
                        "opus48": "71.8%",
                        "gpt55": "71.5%",
                        "gemini31pro": "64.8%"
                    }
                },
                {
                    "id": "riemannbench",
                    "name": "RiemannBench",
                    "tooltip": "Araştırma düzeyi ileri matematik problemleri.",
                    "values": {
                        "fable5": "55.0%",
                        "mythospreview": "43.0%",
                        "opus48": "34.0%"
                    }
                }
            ]
        },
        {
            "name": "UZUN BAĞLAM (1M Token)",
            "id": "c8",
            "benchmarks": [
                {
                    "id": "mrcr_1m",
                    "name": "MRCR 1M",
                    "tooltip": "128k token bağlamda çok turlu sohbet ve geri çağırma testi (1M sürümü).",
                    "values": {
                        "opus46": "92.9%",
                        "gemini35flash": "26.6%",
                        "gemini31pro": "76.3%",
                        "deepseekv4pro": "83.5%"
                    }
                },
                {
                    "id": "corpusqa_1m",
                    "name": "CorpusQA 1M",
                    "tooltip": "1 milyon token bağlamda geniş belge korpus sorgu ve geri çağırma testi.",
                    "values": {
                        "opus46": "71.7%",
                        "gemini31pro": "53.8%",
                        "deepseekv4pro": "62.0%"
                    }
                },
                {
                    "id": "graphwalks_bfs_256k",
                    "name": "GraphWalks BFS 256K",
                    "tooltip": "256K bağlamda graf gezinme (BFS).",
                    "values": {
                        "fable5": "91.1%",
                        "mythospreview": "85.7%",
                        "opus48": "85.9%",
                        "opus47": "76.9%",
                        "opus46": "38.7%",
                        "gpt55": "73.7%",
                        "gpt54": "21.4%"
                    }
                },
                {
                    "id": "graphwalks_parents_256k",
                    "name": "GraphWalks Parents 256K",
                    "tooltip": "256K bağlamda graf ebeveyn düğüm bulma.",
                    "values": {
                        "fable5": "99.96%",
                        "mythospreview": "99.9%",
                        "opus48": "99.3%",
                        "opus47": "93.6%",
                        "gpt55": "90.1%"
                    }
                }
            ]
        },
        {
            "name": "EYLEMCİ / BİLGİSAYAR KULLANIMI · TARAYICI & BİLGİSAYAR KULLANIMI",
            "id": "c10",
            "benchmarks": [
                {
                    "id": "browsecomp",
                    "name": "BrowseComp",
                    "tooltip": "Karmaşık bağımsız web tarama ve bilgi sentezi görevleri.",
                    "values": {
                        "fable5": "88.0%",
                        "mythospreview": "87.9%",
                        "opus5": "90.8%",
                        "opus48": "84.3%",
                        "opus47": "79.8%",
                        "opus46": "83.7%",
                        "sonnet5": "84.7%",
                        "sonnet46": "74.7%",
                        "gpt55": "84.4%",
                        "gpt54": "82.7%",
                        "gemini31pro": "85.9%",
                        "gemini3pro": "59.2%",
                        "deepseekv4pro": "83.4%"
                    }
                },
                {
                    "id": "osworld_verified",
                    "name": "OSWorld-Verified",
                    "tooltip": "Simüle masaüstü işletim sisteminde gerçekçi bilgisayar kullanım görevleri.",
                    "values": {
                        "fable5": "85.0%",
                        "mythospreview": "85.4%",
                        "opus48": "83.4%",
                        "opus47": "82.8%",
                        "opus46": "72.7%",
                        "opus45": "66.3%",
                        "sonnet5": "81.2%",
                        "sonnet46": "72.5%",
                        "gpt55": "78.7%",
                        "gpt54": "75.0%",
                        "gemini35flash": "78.4%",
                        "gemini31pro": "76.2%"
                    }
                },
                {
                    "id": "screenspot_pro_no_tools",
                    "name": "ScreenSpot-Pro (araçsız)",
                    "tooltip": "Ekran arayüz öğesi konumlama; araçsız.",
                    "values": {
                        "opus48": "82.3%",
                        "opus47": "79.5%"
                    }
                },
                {
                    "id": "screenspot_pro_with_tools",
                    "name": "ScreenSpot-Pro (araçlı)",
                    "tooltip": "Ekran arayüz öğesi konumlama; araçlı.",
                    "values": {
                        "opus48": "87.9%",
                        "opus47": "87.6%"
                    }
                },
                {
                    "id": "automation_bench",
                    "name": "Automation Bench",
                    "tooltip": "Uçtan uca otomasyon iş akışı görevleri.",
                    "values": {
                        "fable5": "17.4%",
                        "opus5": "26.0%",
                        "opus48": "15.5%",
                        "opus47": "9.9%",
                        "sonnet5": "13.5%",
                        "gpt55": "12.9%",
                        "gemini35flash": "14.5%",
                        "gemini31pro": "9.6%"
                    }
                }
            ]
        },
        {
            "name": "EYLEMCİ / BİLGİSAYAR KULLANIMI · ARAÇ & PROTOKOL KULLANIMI",
            "id": "c11",
            "benchmarks": [
                {
                    "id": "mcp_atlas",
                    "name": "MCP-Atlas",
                    "tooltip": "8 ortamda LLM eylemcileri değerlendirmek için çok görevli sınav.",
                    "values": {
                        "opus5": "85.8%",
                        "opus48": "82.2%",
                        "opus47": "79.1%",
                        "opus46": "75.8%",
                        "opus45": "62.3%",
                        "sonnet46": "61.3%",
                        "gpt55": "75.3%",
                        "gpt54": "68.1%",
                        "gemini35flash": "83.6%",
                        "gemini31pro": "78.2%",
                        "gemini3pro": "54.1%",
                        "deepseekv4pro": "73.6%"
                    }
                },
                {
                    "id": "toolathlon",
                    "name": "Toolathlon",
                    "tooltip": "Çok araçlı iş akışları ve API entegrasyonunu test eden eylemci sınavı.",
                    "values": {
                        "opus46": "47.2%",
                        "gpt55": "55.6%",
                        "gpt54": "54.6%",
                        "gemini35flash": "56.5%",
                        "gemini31pro": "48.8%",
                        "deepseekv4pro": "51.8%"
                    }
                },
                {
                    "id": "2_bench_retail",
                    "name": "τ2-bench (Retail)",
                    "tooltip": "Araçlar ve API'lerle perakende ortamında müşteri hizmetleri eylemci görevleri.",
                    "values": {
                        "opus46": "91.9%",
                        "opus45": "88.9%",
                        "sonnet46": "91.7%",
                        "gemini31pro": "90.8%",
                        "gemini3pro": "85.3%"
                    }
                },
                {
                    "id": "2_bench_telecom",
                    "name": "τ2-bench (Telecom)",
                    "tooltip": "Telekom sektörü müşteri hizmetleri ortamında eylemci görevleri.",
                    "values": {
                        "opus46": "99.3%",
                        "opus45": "98.2%",
                        "sonnet46": "97.9%",
                        "gpt55": "98.0%",
                        "gpt54": "98.9%",
                        "gemini31pro": "99.3%",
                        "gemini3pro": "98.0%"
                    }
                }
            ]
        },
        {
            "name": "EYLEMCİ / BİLGİSAYAR KULLANIMI · ALAN EYLEMCİLERİ (FİNANS/HUKUK/OFİS)",
            "id": "c12",
            "benchmarks": [
                {
                    "id": "finance_agent_v1_1",
                    "name": "Finance Agent v1.1",
                    "tooltip": "Finans sektörü eylemci görevleri; analiz, rapor ve karar alma.",
                    "values": {
                        "opus47": "64.4%",
                        "opus46": "60.1%",
                        "gpt55": "60.0%",
                        "gpt54": "61.5%",
                        "gemini31pro": "59.7%"
                    }
                },
                {
                    "id": "finance_agent_v2",
                    "name": "Finance Agent v2",
                    "tooltip": "Finans eylemci görevleri (v2).",
                    "values": {
                        "opus48": "53.9%",
                        "opus47": "51.5%",
                        "gpt55": "51.8%",
                        "gemini35flash": "57.9%",
                        "gemini31pro": "43.0%"
                    }
                },
                {
                    "id": "legal_agent_harvey_set",
                    "name": "Legal Agent (Harvey seti)",
                    "tooltip": "Harvey'nin hukuk eylemci görevleri; yayımlanmamış değerlendirme seti.",
                    "values": {
                        "fable5": "13.3%",
                        "opus48": "10.4%",
                        "sonnet5": "5.8%",
                        "gpt55": "2.1%",
                        "gemini35flash": "0.8%",
                        "gemini31pro": "0.0%"
                    }
                },
                {
                    "id": "legal_agent_public_set",
                    "name": "Legal Agent (açık set)",
                    "tooltip": "Hukuk eylemci görevleri; kamuya açık set (Mythos 5 değeri).",
                    "values": {
                        "fable5": "16.9%",
                        "mythospreview": "13.4%",
                        "opus48": "9.6%",
                        "sonnet5": "8.9%"
                    }
                },
                {
                    "id": "officeqa_pro",
                    "name": "OfficeQA Pro",
                    "tooltip": "Gerçek ofis belgeleri üzerinde profesyonel görevler.",
                    "values": {
                        "fable5": "57.9%",
                        "opus48": "48.1%",
                        "gpt55": "52.6%",
                        "gemini31pro": "18.1%"
                    }
                },
                {
                    "id": "vending_bench_2",
                    "name": "Vending-Bench 2 ($)",
                    "tooltip": "Gerçek iş senaryolarında eylemci model performansını para kazanımıyla ölçer.",
                    "values": {
                        "fable5": "$5.680",
                        "opus5": "$11.182",
                        "opus48": "$5.787",
                        "opus47": "$10.937",
                        "opus46": "$8.018",
                        "opus45": "$4.967",
                        "sonnet5": "$6.378",
                        "sonnet46": "$7.204",
                        "gpt56sol": "$9.619",
                        "gpt55": "$7.524",
                        "gpt54": "$6.144",
                        "gemini35flash": "$5.396",
                        "gemini31pro": "$911",
                        "gemini3pro": "$5.478",
                        "deepseekv4pro": "$3.285",
                        "deepseekv32": "$1.034",
                        "grok45": "$3.887",
                        "grok420": "$4.663"
                    }
                }
            ]
        },
        {
            "name": "EYLEMCİ / BİLGİSAYAR KULLANIMI · BELGE & İKTİSADİ GÖREVLER",
            "id": "c13",
            "benchmarks": [
                {
                    "id": "hle_with_tools",
                    "name": "HLE (araçlı)",
                    "tooltip": "Python kod yorumlayıcı aracına erişimle Humanity's Last Exam.",
                    "values": {
                        "fable5": "64.5%",
                        "mythospreview": "64.7%",
                        "opus5": "64.7%",
                        "opus48": "57.9%",
                        "opus47": "54.7%",
                        "opus46": "53.3%",
                        "sonnet5": "57.4%",
                        "sonnet46": "49.0%",
                        "gpt55": "52.2%",
                        "gpt54": "58.7%",
                        "gemini31pro": "51.4%",
                        "deepseekv4pro": "48.2%",
                        "grok4": "44.4%"
                    }
                },
                {
                    "id": "gdpval_aa_elo",
                    "name": "GDPval-AA (Elo)",
                    "tooltip": "GDPval (ekonomik değerli gerçek-dünya görevleri) AA Elo sürümü. Kaynak: artificialanalysis.ai bağımsız ölçümü (tek tip kaynak).",
                    "values": {
                        "fable5": "1932",
                        "opus48": "1890",
                        "opus47": "1753",
                        "opus46": "1619",
                        "opus45": "1450",
                        "sonnet46": "1676",
                        "gpt55": "1769",
                        "gpt54": "1674",
                        "gemini35flash": "1656",
                        "gemini31pro": "1314",
                        "gemini3pro": "1184",
                        "deepseekv4pro": "1554",
                        "deepseekv32": "1197",
                        "deepseekv3": "409",
                        "grok43": "1098",
                        "grok420": "1168",
                        "grok4": "990"
                    }
                },
                {
                    "id": "aa_briefcase_elo",
                    "name": "AA-Briefcase (Elo)",
                    "tooltip": "Artificial Analysis; haftalar suren bilgi isi projelerinde uzun ufuklu basarim. Cozumleme niteligi Elo, sunum Elo ve olcut gecme oranini birlestiren bilesik puan.",
                    "values": {
                        "fable51": "1666",
                        "fable5": "1538",
                        "opus5": "1651",
                        "opus48": "1324",
                        "opus47": "1260",
                        "sonnet5": "1362",
                        "sonnet46": "1071",
                        "gpt6astra": "1568",
                        "gpt56sol": "1483",
                        "gpt55": "1143",
                        "gemini38flash": "1208",
                        "gemini37flash": "1124",
                        "gemini36flash": "959",
                        "gemini35flash": "873",
                        "gemini31pro": "466",
                        "deepseekv4pro0813": "1273",
                        "deepseekv4pro": "930",
                        "grok46": "1554",
                        "grok45": "1293",
                        "grok43": "764"
                    }
                },
                {
                    "id": "gdp_pdf_vision",
                    "name": "GDP.pdf (görsel)",
                    "tooltip": "GDPval görevlerinin PDF/görsel sürümü; araçsız belge anlama.",
                    "values": {
                        "fable5": "29.8%",
                        "opus48": "22.5%",
                        "gpt55": "24.9%",
                        "gemini31pro": "16.7%"
                    }
                }
            ]
        },
        {
            "name": "SİBER GÜVENLİK",
            "id": "c14",
            "benchmarks": [
                {
                    "id": "cybergym",
                    "name": "CyberGym",
                    "tooltip": "Gerçek CTF yarışmalarından Bayrak-Yakala siber güvenlik meydan okumaları.",
                    "values": {
                        "mythospreview": "83.1%",
                        "opus47": "73.1%",
                        "opus46": "73.8%",
                        "gpt55": "81.8%",
                        "gpt54": "66.3%"
                    }
                },
                {
                    "id": "exploitbench",
                    "name": "ExploitBench",
                    "tooltip": "Gerçek yazılım zafiyetlerinden çalışan istismar üretme (Mythos 5 değeri; kalkanlı Fable daha düşük).",
                    "values": {
                        "fable5": "78.0%",
                        "mythospreview": "69.0%",
                        "opus48": "40.0%",
                        "gpt55": "34.0%"
                    }
                }
            ]
        }
    ]
};
