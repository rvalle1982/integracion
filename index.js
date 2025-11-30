module.exports = async function (context, req) {
    context.log("Function ejecutada correctamente");

    context.res = {
        status: 200,
        body: "Hola desde tu Azure Function"
    };
};
