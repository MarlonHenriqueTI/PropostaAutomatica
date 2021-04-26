var PageTitleNotification = {
    Vars: {
        OriginalTitle: document.title,
        Interval: null
    },
    On: function (notification, intervalSpeed) {
        var _this = this;
        _this.Vars.Interval = setInterval(function () {
            document.title = (_this.Vars.OriginalTitle == document.title) ?
                notification :
                _this.Vars.OriginalTitle;
        }, (intervalSpeed) ? intervalSpeed : 1000);
    },
    Off: function () {
        clearInterval(this.Vars.Interval);
        document.title = this.Vars.OriginalTitle;
    }
}


var myAudio = new Audio();
myAudio.src = chrome.extension.getURL("path/to/alerta.mp3");

window.addEventListener("load", function () {
    chrome.storage.sync.set({
        "finalizou": false
    });
    iniciarBusca();
}, true);

function atualizar() {
    window.location.reload(true);
}



function iniciarBusca() {
    const visualizado = document.querySelectorAll('[title="Visualizado"]');
    let mensagem;
    let enviou = document.querySelectorAll('[title="Enviou Proposta"]');
    let valorFinal = 1;
    let valorInicial = 0;
    const trafego = " tudo bem?\nMeu nome é Marlon e a mais de 5 anos venho trabalhando com gestão de trafego no google e facebook.\nLi seu projeto e estou interessado em te ajudar nessa caminhada, eu gosto de trabalhar com feedbacks constantes te deixando por dentro de tudo o que esta ocorrendo, gerando relatórios e trabalhando em novas estratégias para alcançarmos seu objetivo!\nDê uma olhada no meu portfólio e se tiver qualquer dúvida é só me falar!\n{q}https://marlonhenrique.com{/q}\natte.,\nMarlon Henrique";
    const institucional = " tudo bem?\nMeu nome é Marlon, trabalho a mais 5 anos com desenvolvimento web, marketing digital e SEO.\nEstou interessado em desenvolver seu projeto, o meu diferencial está apoiado em 3 palavras chaves: {b}Velocidade, Qualidade e Confiabilidade{/b}, ou seja, garanto que seu projeto vai ser entregue rápido e com a máxima qualidade. Eu também procuro te deixar sempre por dentro do que estou fazendo, te dando feedback constante sobre seu projeto, para evitar qualquer surpresa desagradável no final.\nDê uma olhada no meu portfólio e fique a vontade para me chamar para conversarmos mais sobre seu projeto.\n{q}https://marlonhenrique.com{/q}\nSe quiser saber mais sobre algum projeto específico do portfólio é só me falar.\nOfereço também 30 dias de suporte de forma 100% gratuita após a entrega do projeto para que você possa aproveitar ao máximo e garanta sua satisfação com o que foi entregue.\nDesde já te agradeço e espero colocar seu projeto no ar em breve!\nQualquer dúvida estou a disposição ok?\nConte comigo!\nAbraços.\nAtte.,\nMarlon Henrique";
    const loja = " tudo bem?\nMeu nome é Marlon, trabalho a mais 5 anos com desenvolvimento web, marketing digital e SEO.\nSou responsável pelo desenvolvimentos de várias lojas virtuais e estou interessado em desenvolver a sua, o meu diferencial está apoiado em 3 palavras chaves: {b}Velocidade, Qualidade e Confiabilidade{/b}, ou seja, garanto que seu projeto vai ser entregue rápido e com a máxima qualidade. Eu também procuro te deixar sempre por dentro do que estou fazendo, te dando feedback constante sobre seu projeto, para evitar qualquer surpresa desagradável no final.\nDê uma olhada no meu portfólio e fique a vontade para me chamar para conversarmos mais sobre seu projeto.\n{q}https://marlonhenrique.com{/q}\nSe quiser saber mais sobre algum projeto específico do portfólio é só me falar.\nOfereço também 30 dias de suporte de forma 100% gratuita após a entrega do projeto para que você possa aproveitar ao máximo e garanta sua satisfação com o que foi entregue.\nDesde já te agradeço e espero colocar seu projeto no ar em breve!\nQualquer dúvida estou a disposição ok?\nConte comigo!\nAbraços.\nAtte.,\nMarlon Henrique";
    const crud = " tudo bem?\nMeu nome é Marlon, trabalho a mais 5 anos com desenvolvimento web, marketing digital e SEO.\nSou expecialista em PHP e responsavel pelo desenvolvimento e manutenção de vários sistemas on-demand, estou interessado em desenvolver seu projeto, o meu diferencial está apoiado em 3 palavras chaves: {b}Velocidade, Qualidade e Confiabilidade{/b}, ou seja, garanto que seu projeto vai ser entregue rápido e com a máxima qualidade. Eu também procuro te deixar sempre por dentro do que estou fazendo, te dando feedback constante sobre seu projeto, para evitar qualquer surpresa desagradável no final.\nDê uma olhada no meu portfólio e fique a vontade para me chamar para conversarmos mais sobre seu projeto.\n{q}https://marlonhenrique.com{/q}\nSe quiser saber mais sobre algum projeto específico do portfólio é só me falar.\nOfereço também 30 dias de suporte de forma 100% gratuita após a entrega do projeto para que você possa aproveitar ao máximo e garanta sua satisfação com o que foi entregue.\nDesde já te agradeço e espero colocar seu projeto no ar em breve!\nQualquer dúvida estou a disposição ok?\nConte comigo!\nAbraços.\nAtte.,\nMarlon Henrique";
    const lp = " tudo bem?\nMeu nome é Marlon, trabalho a mais 5 anos com desenvolvimento web, marketing digital e SEO.\nEstou interessado em desenvolver seu projeto, o meu diferencial está apoiado em 3 palavras chaves: {b}Velocidade, Qualidade e Confiabilidade{/b}, ou seja, garanto que seu projeto vai ser entregue rápido e com a máxima qualidade. Eu também procuro te deixar sempre por dentro do que estou fazendo, te dando feedback constante sobre seu projeto, para evitar qualquer surpresa desagradável no final.\nDê uma olhada no meu portfólio e fique a vontade para me chamar para conversarmos mais sobre seu projeto.\n{q}https://marlonhenrique.com{/q}\nSe quiser saber mais sobre algum projeto específico do portfólio é só me falar.\nOfereço também 30 dias de suporte de forma 100% gratuita após a entrega do projeto para que você possa aproveitar ao máximo e garanta sua satisfação com o que foi entregue.\nDesde já te agradeço e espero colocar seu projeto no ar em breve!\nQualquer dúvida estou a disposição ok?\nConte comigo!\nAbraços.\nAtte.,\nMarlon Henrique";
    const sm = " tudo bem?\nMeu nome é Marlon, trabalho a mais de 5 anos com social media, marketing digital, desenvolvimento web e SEO.\nEstou interessado em trabalhar contigo nesse novo desafio, se quiser podemos sentar e discutir sobre seus objetivos, inspirações e o que deseja atingir, montamos um plano juntos e colocamos em pratica, o que acha?\nPossuo um portfólio mas não divulgo meus trabalhos de social media lá, mas deixo disponível caso queira visitar:\n{q}https://marlonhenrique.com{/q}\nSe tiver qualquer dúvida é só me falar e caso queira fazer um teste, podemos fazer também, sem problemas.\nFico no aguardo do seu contato.\nGrande abraço.\natte.,\nMarlon Henrique";
    now = new Date;
    if (now.getHours() >= 0 && now.getHours() < 5) {
        mensagem = "Boa noite ";
    } else if (now.getHours() >= 5 && now.getHours() < 12) {
        mensagem = "Bom dia ";
    } else if (now.getHours() >= 12 && now.getHours() < 18) {
        mensagem = "Boa tarde ";
    } else {
        mensagem = "Boa noite ";
    }


    if (visualizado.length < 20) {
        if (window.location.href == "https://www.99freelas.com.br/project-notifications/view?limit=20") {
            verificarLinks();
        } else if (window.location.href.indexOf("bid") > -1) {
            // Loading 1 thing
            chrome.storage.sync.get(["valorFinal", "mensagem", "duracao"], function (result) {
                // Showing the requested variable value
                setTimeout(proposta(result.valorFinal, result.mensagem, result.duracao), 3000);
                setTimeout(clicarEnviar, 5000);
                setTimeout(clicarCheck, 7000);
                setTimeout(clicarContinuar, 9000);
                
            });

        } else {
            if(enviou.length){
                window.location.href = "https://www.99freelas.com.br/project-notifications/view?limit=20";
                return;
            } else {
            const nome = document.getElementsByClassName('name');
            if (buscarPalavras("Gestão de tráfego") || buscarPalavras("tráfego pago") || buscarPalavras("Gestor de tráfego") || buscarPalavras("Gestor de trafego") || buscarPalavras("Gestão de trafego") || buscarPalavras("Gestao de tráfego") || buscarPalavras("Gestao de trafego") || buscarPalavras("Google Ads") || buscarPalavras("facebook ads") || buscarPalavras("instagram ads")) {
                valorInicial = 550;
                mensagem = mensagem + nome[1].innerText.substring(0, nome[1].innerText.indexOf(" ")) + trafego;
                duracao = 30;
            } else if (buscarPalavras("Instalação Tema Wordpress") || buscarPalavras("Instalação de Tema Wordpress") || buscarPalavras("Instalar Tema Wordpress") || buscarPalavras("Instalar Tema no Wordpress") || buscarPalavras("Instalação de Tema no Wordpress") || buscarPalavras("Instalação Tema no Wordpress")) {
                valorInicial = 300;
                mensagem = mensagem + nome[1].innerText.substring(0, nome[1].innerText.indexOf(" ")) + institucional;
                duracao = 3;
            }   else if (buscarPalavras("Site institucional") || buscarPalavras("Site wordpress") || buscarPalavras("wordpress")) {
                valorInicial = 600;
                mensagem = mensagem + nome[1].innerText.substring(0, nome[1].innerText.indexOf(" ")) + institucional;
                duracao = 7;
            }  else if (buscarPalavras("site para agencia") || buscarPalavras("criação de site") || buscarPalavras("desenvolver o frontend") || buscarPalavras("desenvolver frontend") || buscarPalavras("desenvolver o front-end") || buscarPalavras("desenvolver front-end")) {
                valorInicial = 600;
                mensagem = mensagem + nome[1].innerText.substring(0, nome[1].innerText.indexOf(" ")) + institucional;
                duracao = 7;
            } else if (buscarPalavras("E-commerce") || buscarPalavras("Woocommerce") || buscarPalavras("ecommerce") || buscarPalavras("Loja integrada") || buscarPalavras("Tray") || buscarPalavras("cartx") || buscarPalavras("wix") || buscarPalavras("nuvemshop")) {
                valorInicial = 1300;
                mensagem = mensagem + nome[1].innerText.substring(0, nome[1].innerText.indexOf(" ")) + loja;
                duracao = 15;
            } else if ((buscarPalavras("CRUD") && buscarPalavras("PHP")) || (buscarPalavras("sistema") && buscarPalavras("PHP"))) {
                valorInicial = 1500;
                mensagem = mensagem + nome[1].innerText.substring(0, nome[1].innerText.indexOf(" ")) + crud;
                duracao = 30;
            } else if (buscarPalavras("Landing page") || buscarPalavras("LP") || buscarPalavras("Página de vendas") || buscarPalavras("Pagina de vendas") || buscarPalavras("Página de captura") || buscarPalavras("Pagina de captura")) {
                valorInicial = 250;
                mensagem = mensagem + nome[1].innerText.substring(0, nome[1].innerText.indexOf(" ")) + lp;
                duracao = 3;
            } else if (buscarPalavras("marketplace") || buscarPalavras("market place")) {
                valorInicial = 1500;
                mensagem = mensagem + nome[1].innerText.substring(0, nome[1].innerText.indexOf(" ")) + lp;
                duracao = 25;
            }  else if (buscarPalavras("one page")) {
                valorInicial = 300;
                mensagem = mensagem + nome[1].innerText.substring(0, nome[1].innerText.indexOf(" ")) + lp;
                duracao = 7;
            } else if (buscarPalavras("Blog")) {
                valorInicial = 500;
                mensagem = mensagem + nome[1].innerText.substring(0, nome[1].innerText.indexOf(" ")) + lp;
                duracao = 10;
            } else if (buscarPalavras("social media") || buscarPalavras("gestão de instagram")) {
                valorInicial = 600;
                mensagem = mensagem + nome[1].innerText.substring(0, nome[1].innerText.indexOf(" ")) + sm;
                duracao = 30;
            } else if (buscarPalavras("elementor") || buscarPalavras("web designer")) {
                valorInicial = 600;
                mensagem = mensagem + nome[1].innerText.substring(0, nome[1].innerText.indexOf(" ")) + lp;
                duracao = 10;
            } else {
                window.location.href = "https://www.99freelas.com.br/project-notifications/view?limit=20";
                return;
            }
            valorFinal = verificarDificuldade(valorInicial);
            chrome.storage.sync.set({
                "valorFinal": valorFinal
            });
            chrome.storage.sync.set({
                "mensagem": mensagem
            });
            chrome.storage.sync.set({
                "duracao": duracao
            });
            const botao = document.getElementsByClassName('btn blue clickable');
            setTimeout(botao[0].click(), 5000);

        }
        }
    } else {
        setTimeout(atualizar, 60000);
    }
    chrome.extension.sendMessage({
        type: "dom-loaded",
        data: {
            myProperty: mensagem
        }
    });
}

function verificarLinks() {
    const projetos = document.querySelectorAll('.title');
    let index = 1;
    while (index < projetos.length) {
        if (projetos[index].querySelectorAll('[title="Visualizado"]').length) {
            console.log('Visualizado ' + index);
        } else {
            let link = projetos[index].getElementsByTagName('a');
            link[0].click();
        }
        index++;
    }
}

function verificarDificuldade(valor) {
    let resposta;
    const xp = document.getElementsByClassName('mensagem-nivel-experiencia')

    if (xp[0].innerText == "Iniciante") {
        resposta = valor;
    } else if (xp[0].innerText == "Intermediário") {
        resposta = valor * 2;
    } else if (xp[0].innerText == "Especialista") {
        resposta = valor * 3;
    }
    return resposta;
}

function buscarPalavras(palavra) {
    var palavram = palavra.toLowerCase();
    var word = palavram,
        queue = [document.getElementsByClassName('box-project-view-principal with-flag')[0]],
        curr;
    while (curr = queue.pop()) {
        palavraencontrada = curr.textContent.toLowerCase();
        if (!palavraencontrada.match(word)) continue;
        for (var i = 0; i < curr.childNodes.length; ++i) {
            switch (curr.childNodes[i].nodeType) {
                case Node.TEXT_NODE: // 3
                    if (curr.childNodes[i].textContent.toLowerCase().match(word)) {
                        console.log("Found!"); 
                        if(curr == "[object HTMLParagraphElement]"){
                            return false
                        } else {
                            chrome.runtime.sendMessage({
                                type: "alertUser"
                            });
                            return true;
                        }
                    }
                    break;
                case Node.ELEMENT_NODE: // 1
                    queue.push(curr.childNodes[i]);
                    break;
            }
        }
    }
}

function proposta(valor, mensagem, tempo) {
    PageTitleNotification.On("Enviando Proposta");
    const oferta = document.getElementById('oferta');
    const duracao = document.getElementById('duracao-estimada');
    const texto = document.getElementById('proposta');
    const ofertaFinal = document.getElementById('oferta-final');
    oferta.value = valor;
    duracao.value = tempo;
    texto.value = mensagem;
    ofertaFinal.value = valor + (valor * 0.1);
}

function clicarEnviar() {
    chrome.storage.sync.set({
        "finalizou": true
    });
    document.getElementById('btnConcluirEnvioProposta').click();
}

function clicarCheck() {
    const check = document.getElementById('confirmar-envio-proposta');
    check.checked = true;
}

function clicarContinuar() {
    const continuar = document.getElementsByClassName('btn-acao btn btn-medium btn-blue');
    continuar[0].click();
}

function reiniciar() {
    window.location.href = "https://www.99freelas.com.br/project-notifications/view?limit=20";
}