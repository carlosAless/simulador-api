let numeroFilosofos = 0;
let estadoFilosofo = []
let animacaoAtiva = false
let tComer
let tFome
let tPensa

let exatoP = false
let exatoC = false
let exatoF = false

const ajuste = document.querySelector('.ajuste img')
const outputs = document.querySelectorAll('output');
const btnCancelar = document.querySelector('.btnCancelar')
const btnOk = document.querySelector('.btnOk')
const content = document.querySelector('.content')

const mudarTempo = () => {

    estadoFilosofo.forEach(el => {
        el.tempoPensando = tempo('tempoPensando', verificarExato('tempoPensando'))
        el.tempoComendo = tempo('tempoComendo', verificarExato('tempoComendo'))
        el.tempoFome = tempo('tempoFome', verificarExato('tempoFome'))
    })

}


btnOk.addEventListener('click', () => {

    mudarTempo()
    abrirFecharModal()
})

const parar = () => {
    location.reload(true);

}


btnCancelar.addEventListener('click', () => {
    abrirFecharModal()
})


function updateOutput(event) {
    const output = event.target.nextElementSibling;
    output.textContent = event.target.value + ' segundo(s)';
}


const inputs = document.querySelectorAll('input[type="range"]');
inputs.forEach(input => {
    input.addEventListener('input', updateOutput);
});

ajuste.addEventListener('click', () => {
    abrirFecharModal()
})

const abrirFecharModal = () => {
    modal = window.getComputedStyle(document.querySelector('.modal'))
    if (modal.display == 'none') {
        document.querySelector('.modal').style.display = 'block'

    } else {
        document.querySelector('.modal').style.display = 'none'
    }
}

const toDegrees = (radians) => {
    return radians * (180 / Math.PI);
}

const modificarHashi = (idx) => {

    let angle = (idx / numeroFilosofos) * 2 * Math.PI;

    radiusFilosofo = 230

    let hashi1Remove = document.querySelectorAll('.hashi1')
    hashi1Remove.forEach(hashi1 => hashi1.remove());

    let hashiAux1Remove = document.querySelectorAll('.hashiAux1')
    hashiAux1Remove.forEach(h => h.remove());

    let hashiAux2Remove = document.querySelectorAll('.hashiAux2')
    hashiAux2Remove.forEach(h => h.remove());


    mesa = document.querySelector('.mesa')

    let centerX = mesa.offsetWidth / 2;
    let centerY = mesa.offsetHeight / 2;

    x = centerX + (radiusFilosofo) * Math.cos(angle - 0.2);
    y = centerY + radiusFilosofo * Math.sin(angle - 0.2);

    let hashi1 = document.createElement('img');
    hashi1.src = './img/hashi.png';
    hashi1.className = 'hashi1';
    hashi1.style.left = `${x}px`;
    hashi1.style.top = `${y}px`;

    hashi1.style.transform = `translate(-50%, -50%) rotate(${toDegrees(angle) - 10}deg)`


    mesa.appendChild(hashi1);


}

const adicionarFilosofo = () => {
    let filosofosRemove = document.querySelectorAll('.filosofo');
    filosofosRemove.forEach(filosofo => filosofo.remove());

    let pratoRemove = document.querySelectorAll('.prato')
    pratoRemove.forEach(prato => prato.remove());

    let hashi1Remove = document.querySelectorAll('.hashi1')
    hashi1Remove.forEach(hashi1 => hashi1.remove());

    let hashiAux1Remove = document.querySelectorAll('.hashiAux1')
    hashiAux1Remove.forEach(h => h.remove());

    let hashiAux2Remove = document.querySelectorAll('.hashiAux2')
    hashiAux2Remove.forEach(h => h.remove());


    let mesa = document.querySelector('.mesa');
    numeroFilosofos += 1;

    for (let i = 0; i < numeroFilosofos; i++) {
        let angle = (i / numeroFilosofos) * 2 * Math.PI;
        let radiusFilosofo = 230;
        let radiusHashi = radiusFilosofo;
        let centerX = mesa.offsetWidth / 2;
        let centerY = mesa.offsetHeight / 2;
        let x = centerX + radiusFilosofo * Math.cos(angle);
        let y = centerY + radiusFilosofo * Math.sin(angle);

        let filosofo = document.createElement('div');
        let olho1 = document.createElement('div')
        let olho2 = document.createElement('div')
        let boca = document.createElement('div')
        let bola1 = document.createElement('div')
        let bola2 = document.createElement('div')
        let bola3 = document.createElement('div')
        const imagensDisponiveis = ['img/coxinha.png', 'img/ovo.png', 'img/bolo.png', 'img/galinha.png', 'img/pizza.png'];

        const indiceAleatorio = Math.floor(Math.random() * imagensDisponiveis.length);

        let icon = document.createElement('img');

        icon.src = imagensDisponiveis[indiceAleatorio];

        icon.classList = 'icon';

        olho1.className = 'olho1'
        olho2.className = 'olho2'
        boca.className = 'boca'
        bola1.className = 'bola1'
        bola2.className = 'bola2'
        bola3.className = 'bola3'


        filosofo.className = 'filosofo'
        filosofo.style.left = `${x}px`;
        filosofo.style.top = `${y}px`;

        radiusFilosofo = 180;
        x = centerX + radiusFilosofo * Math.cos(angle);
        y = centerY + radiusFilosofo * Math.sin(angle);

        let prato = document.createElement('img');
        prato.src = './img/prato.png';
        prato.className = 'prato';
        prato.style.left = `${x - 4}px`;
        prato.style.top = `${y - 4}px`;

        x = centerX + (radiusFilosofo) * Math.cos(angle - 0.2);
        y = centerY + radiusFilosofo * Math.sin(angle - 0.2);

        let hashi1 = document.createElement('img');
        hashi1.src = './img/hashi.png';
        hashi1.className = 'hashi1';
        hashi1.style.left = `${x}px`;
        hashi1.style.top = `${y}px`;


        hashi1.style.transform = `translate(-50%, -50%) rotate(${toDegrees(angle) - 10}deg)`

        radiusFilosofo = 230

        x = centerX + (radiusFilosofo) * Math.cos(angle - 0.1);
        y = centerY + radiusFilosofo * Math.sin(angle - 0.1);


        let hashiAux1 = document.createElement('img');
        hashiAux1.src = './img/hashi.png';
        hashiAux1.className = 'hashiAux1';
        hashiAux1.style.left = `${x}px`;
        hashiAux1.style.top = `${y}px`;
        hashiAux1.style.transform = `translate(-50%, -50%) rotate(${toDegrees(angle)}deg)`


        x = centerX + (radiusFilosofo) * Math.cos(angle + 0.1);
        y = centerY + radiusFilosofo * Math.sin(angle + 0.1);

        let hashiAux2 = document.createElement('img');
        hashiAux2.src = './img/hashi.png';
        hashiAux2.className = 'hashiAux2';
        hashiAux2.style.left = `${x}px`;
        hashiAux2.style.top = `${y}px`;
        hashiAux2.style.transform = `translate(-50%, -50%) rotate(${toDegrees(angle)}deg)`



        x = centerX + radiusFilosofo * Math.cos(angle + 0.1);
        y = centerY + radiusFilosofo * Math.sin(angle + 0.1);


        let angleToCenter = Math.atan2(centerY - y, centerX - x);


        x = centerX + radiusFilosofo * Math.cos(angle + 0.1);
        y = centerY + radiusFilosofo * Math.sin(angle + 0.1);


        filosofo.appendChild(icon)
        filosofo.appendChild(olho1)
        filosofo.appendChild(olho2)
        filosofo.appendChild(boca)
        filosofo.appendChild(bola1)
        filosofo.appendChild(bola2)
        filosofo.appendChild(bola3)

        mesa.appendChild(filosofo);
        mesa.appendChild(prato);
        mesa.appendChild(hashi1);
        mesa.appendChild(hashiAux1)
        mesa.appendChild(hashiAux2)
    }
}


var quant = 0
const soltarHashi = async (filosofos) => {


    document.querySelectorAll('.icon')[filosofos.id].style.display = 'none';

    setTimeout(() => {
        if (filosofos.id == estadoFilosofo.length - 1) {
            estadoFilosofo[0].garfo[1] = false;
            estadoFilosofo[filosofos.id].garfo[0] = false;
            estadoFilosofo[filosofos.id].garfo[1] = false;

            while (document.querySelectorAll('.hashiAux2')[filosofos.id].style.display != 'none') {
                document.querySelectorAll('.hashiAux2')[filosofos.id].style.display = 'none';
                document.querySelectorAll('.hashiAux1')[filosofos.id].style.display = 'none';
                document.querySelectorAll('.hashi1')[filosofos.id].style.display = 'block';
                document.querySelectorAll('.hashi1')[0].style.display = 'block';
            }

        } else {
            estadoFilosofo[filosofos.id + 1].garfo[1] = false;
            estadoFilosofo[filosofos.id].garfo[0] = false;
            estadoFilosofo[filosofos.id].garfo[1] = false;


            document.querySelectorAll('.hashiAux2')[filosofos.id].style.display = 'none';
            document.querySelectorAll('.hashiAux1')[filosofos.id].style.display = 'none';
            document.querySelectorAll('.hashi1')[filosofos.id].style.display = 'block';
            document.querySelectorAll('.hashi1')[filosofos.id + 1].style.display = 'block';

        }
    }, 1000)

    quant = quant + 1
    if (quant == estadoFilosofo.length) {
        quant = 0
        await mudarTempo()
        inicioPensar()
    }

};


class filosofo {
    constructor(id, tempoDecorrido, tempoFome, tempoComendo, tempoPensando, garfo, estado) {
        this.id = id
        this.tempoDecorrido = tempoDecorrido
        this.tempoFome = tempoFome
        this.tempoComendo = tempoComendo
        this.tempoPensando = tempoPensando
        this.garfo = garfo
        this.estado = estado
    }




    limparTimeouts(...timeouts) {
        timeouts.forEach(timeout => clearTimeout(timeout));
    }




}

const pensar = async (filosofos) => {
    await Promise.all(filosofos.map(async (el) => {

        document.querySelectorAll('.icon')[el.id].style.display = 'none';

        const olho1 = document.querySelectorAll('.filosofo')[el.id].querySelector('.olho1');
        const olho2 = document.querySelectorAll('.filosofo')[el.id].querySelector('.olho2');
        olho1.style.borderRadius = '0';
        olho2.style.borderRadius = '0';
        olho1.style.height = 0;
        olho2.style.height = 0;

        setTimeout(() => {
            document.querySelectorAll('.filosofo')[el.id].querySelector('.bola1').style.display = 'block';
            setTimeout(() => {
                document.querySelectorAll('.filosofo')[el.id].querySelector('.bola2').style.display = 'block';
                setTimeout(() => {
                    document.querySelectorAll('.filosofo')[el.id].querySelector('.bola3').style.display = 'block';
                    setTimeout(() => {
                        document.querySelectorAll('.filosofo')[el.id].querySelector('.bola1').style.display = 'none';
                        document.querySelectorAll('.filosofo')[el.id].querySelector('.bola2').style.display = 'none';
                        document.querySelectorAll('.filosofo')[el.id].querySelector('.bola3').style.display = 'none';
                    }, 10)
                }, 350)
            }, 320)
        }, 320)


    }));
};

const comer = async (filosofo) => {
    if (filosofo.length == 0) return
    el = filosofo

    const idx = el.id;
    const bocaElement = document.querySelectorAll('.boca')[idx];

    setTimeout(() => {
        bocaElement.style.height = '9px';
        bocaElement.style.borderRadius = '100%';
        setTimeout(() => {
            bocaElement.style.height = '2px';
            bocaElement.style.borderRadius = '0%';
        }, 500);
    }, 500);

};




const pegarGarfoEsquerdo = async (filosofo) => {

    filosofo.map(async (el) => {

        if (el.id === estadoFilosofo.length - 1) {





            while (el.garfo[0] || estadoFilosofo[0].garfo[1] || document.querySelectorAll('.hashiAux1')[0].style.display === 'block') {
                await new Promise(resolve => setTimeout(resolve, 500));
            }

            el.garfo[0] = true;
            estadoFilosofo[0].garfo[1] = true;

            document.querySelectorAll('.hashiAux2')[el.id].style.display = 'block';
            document.querySelectorAll('.hashi1')[0].style.display = 'none';


            while (document.querySelectorAll('.icon')[el.id].style.display != 'block') {
                document.querySelectorAll('.icon')[el.id].style.display = 'block';
            }


            estadoFilosofo[el.id].estado = 'comer';

            iniciarComer(el)
        } else {
            if (el.id !== 0) {
                while (el.garfo[0] || estadoFilosofo[el.id + 1].garfo[1] || document.querySelectorAll('.hashiAux1')[el.id + 1].style.display === 'block') {
                    await new Promise(resolve => setTimeout(resolve, 500));
                }

                estadoFilosofo[el.id + 1].garfo[1] = true;
                estadoFilosofo[el.id].garfo[0] = true;
                document.querySelectorAll('.hashiAux2')[el.id].style.display = 'block';
                document.querySelectorAll('.hashi1')[el.id + 1].style.display = 'none';

                while (document.querySelectorAll('.icon')[el.id].style.display != 'block') {
                    document.querySelectorAll('.icon')[el.id].style.display = 'block';
                }


                estadoFilosofo[el.id].estado = 'comer';
                iniciarComer(el)

            } else {
                while (estadoFilosofo[0].garfo[0] || estadoFilosofo[0 + 1].garfo[1] || document.querySelectorAll('.hashiAux1')[0 + 1].style.display === 'block') {

                    await new Promise(resolve => setTimeout(resolve, 500));
                }

                estadoFilosofo[0 + 1].garfo[1] = true;
                estadoFilosofo[0].garfo[0] = true;
                document.querySelectorAll('.hashiAux2')[0].style.display = 'block';
                document.querySelectorAll('.hashi1')[0 + 1].style.display = 'none';

                while (document.querySelectorAll('.icon')[el.id].style.display != 'block') {
                    document.querySelectorAll('.icon')[el.id].style.display = 'block';
                }


                estadoFilosofo[el.id].estado = 'comer';
                iniciarComer(el)

            }
        }
    })


};




const pegarGarfoDireita = async (filosofos) => {

    filosofos.forEach(el => {

        el.tempoDecorrido = 0

    })




    filosofos.forEach(async (el) => {


        const olho1 = document.querySelectorAll('.olho1')[el.id];
        const olho2 = document.querySelectorAll('.olho2')[el.id];

        olho2.style.height = '5px';
        olho1.style.height = '5px';
        olho1.style.width = '5px';
        olho2.style.width = '5px';
        olho1.style.borderRadius = '5px';
        olho2.style.borderRadius = '5px';

        document.querySelectorAll('.icon')[el.id].style.display = 'block';




        while (estadoFilosofo[el.id].garfo[1]) {
            await new Promise(resolve => setTimeout(resolve, 500));
        }



        estadoFilosofo[el.id].garfo[1] = true;
        document.querySelectorAll('.hashiAux1')[el.id].style.display = 'block';
        document.querySelectorAll('.hashi1')[el.id].style.display = 'none';


    })

    verificaGarfosDireita(filosofos);

};



const iniciarComer = async (filosofo) => {
    filosofo.tempoDecorrido = 0;
    document.querySelectorAll('.icon')[filosofo.id].style.display = 'none';
    while (filosofo.tempoDecorrido < filosofo.tempoComendo) {
        filosofo.tempoDecorrido += 1000;
        filosofo.estado = 'comer';
        await comer(filosofo);

        if (filosofo.tempoDecorrido < filosofo.tempoComendo) {
            await new Promise(resolve => setTimeout(resolve, 1000));
        }
    }

    filosofo.tempoDecorrido = 0;
    filosofo.estado = 'pensando';
    soltarHashi(filosofo);

};



var aux = 0

const verificaGarfosEsquerda = async (filosofos) => {
    if (filosofos.length == 0) {
        return
    }

    filosofos.forEach(async (el) => {
        el.tempoDecorrido = 0

        if (el.garfo[0] && el.garfo[1] && document.querySelectorAll('.hashiAux1')[el.id].style.display == 'block' && document.querySelectorAll('.hashi1')[el.id].style.display == 'none') {
            await iniciarComer(el)
        }

    })

};

const verificaGarfosDireita = async (filosofos) => {



    if (filosofos.length == 0) {
        return
    }

    while (true) {

        if (filosofos.every(filosofo => filosofo.garfo[1]) && filosofos.every(filosofo => filosofo.estado === "fome")) {
            await pegarGarfoEsquerdo(filosofos)

            return
        } else {
            return
        }
        await new Promise(resolve => setTimeout(resolve, 100));

    }

};

let temposProcessados = []
const execucoesIniciadas = [];

const iniciarInicioFome = async (filosofosComTempoPensando) => {


    filosofosComTempoPensando.forEach(el => {
        el.tempoDecorrido = 0
    })


    if (filosofosComTempoPensando.length === 0) {
        return;
    }

    pegarGarfoDireita(filosofosComTempoPensando);

}






const inicioPensar = async () => {

    const grupos = {};




    estadoFilosofo.forEach(filosofo => {
        const tempoPensando = filosofo.tempoPensando;
        if (!grupos[tempoPensando]) {
            grupos[tempoPensando] = [];
        }
        grupos[tempoPensando].push(filosofo);
    });

    const gruposOrdenados = Object.entries(grupos).sort((a, b) => a[0] - b[0]);


    aux = []

    gruposOrdenados.forEach(el => {
        el.forEach((e, id) => {
            if (id > 0) {

                aux.push(e)
            }
        })
    })



    let intervalo = setInterval(() => {
        for (let i = 0; i < aux.length; i++) {
            let el = aux[i];
            if (el.length === 1) {
                for (let j = 0; j < el.length; j++) {
                    let f = aux[i][j];
                    if (f.tempoPensando === f.tempoDecorrido) {
                        el.forEach(e => e.estado = 'fome');
                        iniciarInicioFome(el);
                        aux.splice(i, 1);
                    }
                    if (f.tempoPensando > f.tempoDecorrido && f.estado == 'pensando') {
                        pensar(el);
                    }
                    if (f.estado == 'pensando') {
                        f.tempoDecorrido += 1000;
                    }
                }
            }

            if (el.length > 1) {
                el.forEach((f, idx) => {
                    if (f.tempoDecorrido < f.tempoPensando && f.estado == 'pensando') {
                        pensar(el);
                    }
                    if (idx === el.length - 1 && f.tempoPensando === f.tempoDecorrido) {
                        el.forEach(e => e.estado = 'fome');
                        iniciarInicioFome(el);
                        aux.splice(i, 1);
                    }
                    if (f.estado == 'pensando') {
                        f.tempoDecorrido += 1000;
                    }
                });
            }
        }

        if (aux.length < 1) {
            clearInterval(intervalo);
            return
        }
    }, 1000);

};



const animaFilosofo = async () => {

    inicioPensar()
};

const tempo = (t, exato) => {

    return exato ? 1000 * document.querySelector(`#${t}`).value : 1000 * Math.ceil(Math.random() * document.querySelector(`#${t}`).value)
}


const verificarExato = (t) => {
    if (t == 'tempoFome') {
        return document.querySelector('#exatoFome').checked
    }
    if (t == 'tempoComendo') {
        return document.querySelector('#exatoComer').checked
    }
    if (t == 'tempoPensando') {
        return document.querySelector('#exatoPensar').checked
    }
}

const iniciar = async () => {

    if (animacaoAtiva) {
        return
    }

    animacaoAtiva = true

    const el = document.querySelectorAll('.filosofo');
    el.forEach((el, idx) => {
        let tempoFome = tempo('tempoFome', verificarExato('tempoFome'))
        let tempoComendo = tempo('tempoComendo', verificarExato('tempoComendo'))
        let tempoPensando = tempo('tempoPensando', verificarExato('tempoPensando'))
        let garfo = [false, false];
        let estado = 'pensando'
        let tempoDecorrido = 0
        estadoFilosofo.push(new filosofo(
            idx,
            tempoDecorrido,
            tempoFome,
            tempoComendo,
            tempoPensando,
            garfo,
            estado,

        ));
    });

    await animaFilosofo()

}