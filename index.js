module.exports = async function (context, req) {
  context.log("📩 Solicitud recibida correctamente");
  context.res = {
    status: 200,
    body: "✅ La función está activa y respondió correctamente"
  };
};