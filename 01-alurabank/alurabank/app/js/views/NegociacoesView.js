class NegociacaoView extends View {
    template(model) {
        return `
                ${model.paraArray().map(negociacao => `
                        <tr>
                            <td>${negociacao.getData().getDate()}/${negociacao.getData().getMonth() + 1}/${negociacao.getData().getFullYear()}</td>
                            <td>${negociacao.getQtd()}</td>
                            <td>${negociacao.getValor()}</td>
                            <td>${negociacao.getVolume()}</td>
                        </tr>
                    `).join('')}
        `;
    }
}
