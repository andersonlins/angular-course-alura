class NegociacaoView {

    private _elemento: Element ;

    constructor(selector: string) {
        this._elemento = document.querySelector(selector);
    }

    update(negociacoes: Negociacoes): void {
        this._elemento.innerHTML = this.template(negociacoes);
    }

    template(model: Negociacoes): string {
        return  `
                ${model.paraArray().map(negociacao =>
                    `
                        <tr>
                            <td>${negociacao.getData().getDate()}/${negociacao.getData().getMonth() + 1}/${negociacao.getData().getFullYear()}</td>
                            <td>${negociacao.getQtd()}</td>
                            <td>${negociacao.getValor()}</td>
                            <td>${negociacao.getVolume()}</td>
                        </tr>
                    `
                ).join('')}
        `;
    }
}