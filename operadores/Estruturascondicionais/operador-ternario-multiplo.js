let quartosDisponiveis = 5;
let reservaConfirmada = true;

let statusReserva = (reservaConfirmada && quartosDisponiveis > 0) ? "Reserva confirmada"
                  : (quartosDisponiveis > 0) ? "Aguardandon confirmação"
                  : "Sem quartos disponíveis";
console.log(statusReserva);