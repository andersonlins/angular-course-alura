class NegociacaoView {
    constructor(selector) {
        this._elemento = document.querySelector(selector);
    }
    update(negociacoes) {
        this._elemento.innerHTML = this.template(negociacoes);
    }
    template(model) {
        return `
        <table class="table table-hover table-bordered">
            <thead>
                <tr>
                    <th>DATA</th>
                    <th>QUANTIDADE</th>
                    <th>VALOR</th>
                    <th>VOLUME</th>
                </tr>
            </thead>

            <tbody>
                ${model.paraArray().map(negociacao => `
                        <tr>
                            <td>${negociacao.getData().getDate()}/${negociacao.getData().getMonth() + 1}/${negociacao.getData().getFullYear()}</td>
                            <td>${negociacao.getQtd()}</td>
                            <td>${negociacao.getValor()}</td>
                            <td>${negociacao.getVolume()}</td>
                        </tr>
                    `).join()}
            </tbody>

            <tfoot>
            </tfoot>
        </table>
        `;
    }
}
