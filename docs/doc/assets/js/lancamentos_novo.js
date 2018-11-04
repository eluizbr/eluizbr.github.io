$(function () {
    'use strict'






    //TABLE NOVO LANÇAMENTO
    var lancamentos = [{
            "Coligada": 0,
            "Centro de Custo": 0,
            "Conta Contábil": 1,
            "Mês": "Ago/2018",
            "Valor": 245,
            "Fornecedor": 2,
            "Descrição": "Papel A4 para impressora"
        },
        {
            "Coligada": 0,
            "Centro de Custo": 0,
            "Conta Contábil": 1,
            "Mês": "Ago/2018",
            "Valor": 245,
            "Fornecedor": 2,
            "Descrição": "Papel A4 para impressora"
        },
        {
            "Coligada": 0,
            "Centro de Custo": 0,
            "Conta Contábil": 1,
            "Mês": "Ago/2018",
            "Valor": 245,
            "Fornecedor": 2,
            "Descrição": "Papel A4 para impressora"
        },
        {
            "Coligada": 0,
            "Centro de Custo": 0,
            "Conta Contábil": 1,
            "Mês": "Ago/2018",
            "Valor": 245,
            "Fornecedor": 2,
            "Descrição": "Papel A4 para impressora"
        },
        {
            "Coligada": 0,
            "Centro de Custo": 0,
            "Conta Contábil": 1,
            "Mês": "Ago/2018",
            "Valor": 245,
            "Fornecedor": 2,
            "Descrição": "Papel A4 para impressora"
        }
    ];

    var coligadas = [{
            Name: "Coligada1",
            Id: 0
        },
        {
            Name: "Coligada2",
            Id: 1
        },
        {
            Name: "Coligada3",
            Id: 2
        },
        {
            Name: "Coligada4",
            Id: 3
        }
    ];

    var meses = [{
            Name: "Janeiro",
            Id: 0
        },
        {
            Name: "Fevereiro",
            Id: 1
        },
        {
            Name: "Março",
            Id: 2
        },
        {
            Name: "Abril",
            Id: 3
        }
    ];


    $("#jsGrid").jsGrid({
        width: "100%",
        height: "auto",

        heading: true,
        filtering: true,
        selecting: true,
        pageLoading: true,
        inserting: true,
        editing: true,
        sorting: true,
        paging: true,
        confirmDeleting: true,
        deleteConfirm: "Você tem certeza?",
        loadIndication: true,
        loadIndicationDelay: 500,
        loadMessage: "Por favor, aguarde...",
        loadShading: true,

        data: lancamentos,

        fields: [{
                name: "Coligada",
                type: "select",
                items: coligadas
            },
            {
                name: "Centro de Custo",
                type: "select",
                items: coligadas,
                type: "text"
            },
            {
                name: "Conta Contábil",
                type: "select",
                items: coligadas,
                type: "text"
            },
            {
                name: "Mês",
                type: "select",
                items: meses,
                valueField: "Id",
                textField: "Name"
            },
            {
                name: "Valor",
                type: "number",
                sorting: true
            },
            {
                name: "Fornecedor",
                type: "select",
                items: coligadas
            },
            {
                name: "Descrição",
                type: "text"
            },
            {
                type: "control"
            }
        ]
    });


    // CHARTS
    var ctx = document.getElementById('myChart').getContext('2d');

    var chart = new Chart(ctx, {
        // The type of chart we want to create
        type: 'line',

        // The data for our dataset
        data: {
            labels: ["January", "February", "March", "April", "May", "June", "July"],
            datasets: [{
                label: "My First dataset",
                backgroundColor: 'rgb(255, 99, 132)',
                borderColor: 'rgb(255, 99, 132)',
                data: [0, 10, 5, 2, 20, 30, 45],
            }]
        },

        // Configuration options go here
        options: {}
    });


    var ctx2 = document.getElementById('myChart2').getContext('2d');

    var chart2 = new Chart(ctx2, {
        // The type of chart we want to create
        type: 'line',

        // The data for our dataset
        data: {
            labels: ["January", "February", "March", "April", "May", "June", "July"],
            datasets: [{
                label: "My First dataset",
                backgroundColor: 'rgb(255, 99, 132)',
                borderColor: 'rgb(255, 99, 132)',
                data: [0, 10, 5, 2, 20, 30, 45],
            }]
        },

        // Configuration options go here
        options: {}
    });


    var ctx3 = document.getElementById('myChart3').getContext('2d');

    var chart3 = new Chart(ctx3, {
        // The type of chart we want to create
        type: 'line',

        // The data for our dataset
        data: {
            labels: ["January", "February", "March", "April", "May", "June", "July"],
            datasets: [{
                label: "My First dataset",
                backgroundColor: 'rgb(255, 99, 132)',
                borderColor: 'rgb(255, 99, 132)',
                data: [0, 10, 5, 2, 20, 30, 45],
            }]
        },

        // Configuration options go here
        options: {}
    });

    // END CHARTS
});