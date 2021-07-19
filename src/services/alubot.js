class Alubot {
  constructor(){
    throw new Error("This class cannot be instantiated");
  }

  static async sendDiscordNotification(fields) {
    const url = "http://34.221.115.101:5000/api/alubot";
    const payload = {
      name: fields.nome_completo,
      phone: fields.mobilephone,
      email: fields.email
    };

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload)
    };

    try {
      await fetch(url, options);

    } catch (error) {
      throw error;
    }
  }

}

export default Alubot;
