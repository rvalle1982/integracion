module.exports = async function (context, req) {
    context.res = {
        body: "Hola desde la Function que apenas existe"
    };
};