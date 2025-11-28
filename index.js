module.exports = async function (context, req) {
    context.log("Hola desde Azure Function!");
    context.res = {
        status: 200,
        body: "✅ Tu función vive. Felicidades, programador nivel 1 desbloqueado."
    };
};
