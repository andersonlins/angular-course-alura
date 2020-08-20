import {MensagemView, NegociacaoView} from '../views/index';
import {Negociacao, Negociacoes} from '../models/index';

export class NegociacaoController {

    private _inputData: JQuery;
    private _inputQuantidade: JQuery;
    private _inputValor: JQuery;
    private _negociacoes = new Negociacoes();
    private _negociacaoView = new NegociacaoView('#negociacoesView', true);
    private _mensagemView = new MensagemView('#mensagemView', true)

    constructor() {
        this._inputData = $('#data');
        this._inputQuantidade = $('#quantidade');
        this._inputValor = $('#valor');
        this._negociacaoView.update(this._negociacoes);
    }

    adiciona(event: Event) {
        event.preventDefault();

        const negociacao = new Negociacao(
            new Date(this._inputData.val()),
            parseInt(this._inputQuantidade.val()),
            parseFloat(this._inputValor.val())
        );

        this._negociacoes.adiciona(negociacao);

        this._negociacaoView.update(this._negociacoes);

        this._mensagemView.update('Negociação adiciona com sucesso!');
    }
}