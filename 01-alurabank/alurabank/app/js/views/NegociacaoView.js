System.register(["./View"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var View_1, NegociacaoView;
    return {
        setters: [
            function (View_1_1) {
                View_1 = View_1_1;
            }
        ],
        execute: function () {
            NegociacaoView = class NegociacaoView extends View_1.View {
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
            };
            exports_1("NegociacaoView", NegociacaoView);
        }
    };
});
