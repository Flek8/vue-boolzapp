const vue = new Vue (
    {
        el:'#app',
        data: {
            newMessage: '',
            chatFilter: '', //indica il contanuto della barra di ricerca
            utenteAttivo: '', //indica di quale utente viene visualizzata la chat
            contacts: [
                {
                    name: 'Michele',
                    avatar: '_1',
                    visible: false,
                    filtered: false, //mi indica se la chat è visibile dopo il filtraggio
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            text: 'Hai portato a spasso il cane?',
                            status: 'sent',
                            option: false, //indica se il menu opzioni messaggio è aperto
                            deleted: false // indica se il messaggio è stato cancellato
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            text: 'Ricordati di dargli da mangiare',
                            status: 'sent',
                            option: false,
                            deleted: false
                        },
                        {
                            date: '10/01/2020 16:15:22',
                            text: 'Tutto fatto!',
                            status: 'received',
                            option: false,
                            deleted: false
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
                            status: 'sent',
                            option: false,
                            deleted: false
                        },
                        {
                            date: '20/03/2020 16:30:55',
                            text: 'Bene grazie! Stasera ci vediamo?',
                            status: 'received',
                            option: false,
                            deleted: false
                        },
                        {
                            date: '20/03/2020 16:35:00',
                            text: 'Mi piacerebbe ma devo andare a fare la spesa.',
                            status: 'sent',
                            option: false,
                            deleted: false
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
                            status: 'received',
                            option: false,
                            deleted: false
                        },
                        {
                            date: '28/03/2020 10:20:10',
                            text: 'Sicuro di non aver sbagliato chat?',
                            status: 'sent',
                            option: false,
                            deleted: false
                        },
                        {
                            date: '28/03/2020 16:15:22',
                            text: 'Ah scusa!',
                            status: 'received',
                            option: false,
                            deleted: false
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
                            status: 'sent',
                            option: false,
                            deleted: false
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            text: 'Si, ma preferirei andare al cinema',
                            status: 'received',
                            option: false,
                            deleted: false
                        }
                    ],
                }
            ]
        },
        methods: {
            cambiaChat(el) {  // funzione per cambiare l'utente attivo e quindi la chat visibile
                utenteAttivo.visible = false;
                el.visible = true;
                utenteAttivo = el;
            },
            inviaMessaggio(el) {
                if (this.newMessage != '') { //crea un nuovo messaggio e lo aggiunge all'array e quindi al thread
                    let messageObj = {
                        date: dayjs().format('DD/MM/YY HH:mm:ss'),
                        text: this.newMessage,
                        status: 'sent',
                        option: false,
                        deleted: false
                    }
                    el.messages.push(messageObj);
                    this.newMessage = '';
                    el2 = el
                    this.rispondiMessaggio(el2);
                }
            },
            rispondiMessaggio(par) { //dopo un secondo dall'invio del messaggio genera una risposta 'ok'
                setTimeout(function() {
                    let rispostaObj = {
                        date: dayjs().format('DD/MM/YY HH:mm:ss'),
                        text: 'Ok',
                        status: 'received',
                        option: false,
                        deleted: false
                    }
                    par.messages.push(rispostaObj);}, 1000)
            },
            filtraChat() {  //utilizzando il contanuto della barra dimricerca filtra i nomi degli utenti
                let nominativo;
                let filtro;
                for (let i = 0; i < this.contacts.length; i++) {
                    nominativo = this.contacts[i].name.toLowerCase();
                    filtro = this.chatFilter.toLowerCase();
                    if (filtro != '' && !nominativo.includes(filtro)) { //modifica la voce 'filtered' in base al nome degli utenti
                        this.contacts[i].filtered = true;
                    } else {
                        this.contacts[i].filtered = false;
                    }
                }
            },
            mostraOpzioni(el) { //permette di mostrare il menu diopzioni
                el.option = !el.option
            },
            eliminaMessaggio(el) { //elimina il messaggio
                el.deleted = true;
            }
        },
        mounted: function() {  //imposta come utente attivo il primo dell'array al caricamento della pagina
            utenteAttivo = this.contacts[0];
            utenteAttivo.visible = true;
        }
    }
)
    