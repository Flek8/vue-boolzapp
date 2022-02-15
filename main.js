const vue = new Vue (
    {
        el:'#app',
        data: {
            newMessage: '',
            chatFilter: '',
            utenteAttivo: '',
            contacts: [
                {
                    name: 'Michele',
                    avatar: '_1',
                    visible: false,
                    filtered: false,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            text: 'Hai portato a spasso il cane?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            text: 'Ricordati di dargli da mangiare',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 16:15:22',
                            text: 'Tutto fatto!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Fabio',
                    avatar: '_2',
                    visible: false,
                    filtered: false,
                    messages: [
                        {
                            date: '20/03/2020 16:30:00',
                            text: 'Ciao come stai?',
                            status: 'sent'
                        },
                        {
                            date: '20/03/2020 16:30:55',
                            text: 'Bene grazie! Stasera ci vediamo?',
                            status: 'received'
                        },
                        {
                            date: '20/03/2020 16:35:00',
                            text: 'Mi piacerebbe ma devo andare a fare la spesa.',
                            status: 'sent'
                        }
                    ],
                },
                {
                    name: 'Samuele',
                    avatar: '_3',
                    visible: false,
                    filtered: false,
                    messages: [
                        {
                            date: '28/03/2020 10:10:40',
                            text: 'La Marianna va in campagna',
                            status: 'received'
                        },
                        {
                            date: '28/03/2020 10:20:10',
                            text: 'Sicuro di non aver sbagliato chat?',
                            status: 'sent'
                        },
                        {
                            date: '28/03/2020 16:15:22',
                            text: 'Ah scusa!',
                            status: 'received'
                        }
                    ]
                },
                {
                    name: 'Luisa',
                    avatar: '_4',
                    visible: false,
                    filtered: false,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            text: 'Lo sai che ha aperto una nuova pizzeria?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            text: 'Si, ma preferirei andare al cinema',
                            status: 'received'
                        }
                    ],
                }
            ]
        },
        methods: {
            cambiaChat(el) {
                utenteAttivo.visible = false;
                el.visible = true;
                utenteAttivo = el;
            },
            inviaMessaggio(el) {
                if (this.newMessage != '') {
                    let messageObj = {
                        date: '',
                        text: this.newMessage,
                        status: 'sent',
                    }
                    el.messages.push(messageObj);
                    this.newMessage = '';
                    el2 = el
                    this.rispondiMessaggio(el2);
                }
            },
            rispondiMessaggio(par) {
                setTimeout(function() {
                    let rispostaObj = {
                        date: '',
                        text: 'Ok',
                        status: 'received'
                    }
                    par.messages.push(rispostaObj);}, 1000)
            },
            filtraChat() {
                let nominativo;
                let filtro;
                for (let i = 0; i < this.contacts.length; i++) {
                    nominativo = this.contacts[i].name.toLowerCase();
                    filtro = this.chatFilter.toLowerCase();
                    if (filtro != '' && !nominativo.includes(filtro)) {
                        this.contacts[i].filtered = true;
                    } else {
                        this.contacts[i].filtered = false;
                    }
                }
            }
        },
        mounted: function() {
            utenteAttivo = this.contacts[0];
            utenteAttivo.visible = true;
        }
    }
)
    