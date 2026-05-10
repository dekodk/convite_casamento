import conjuntosobremesa from "./assets/Conjunto Sobremesa.jpeg";
import jogotacas from "./assets/jogo com 6 taças de vidro.jpeg";
import jogocama from "./assets/jogo de cama Queen.jpeg";
import jogopote1 from "./assets/jogo de potes1.jpeg";
import jogopote2 from "./assets/jogo de potes2.jpeg";
import jogotalher from "./assets/jogo de talher faqueiro Inox.jpeg";
import jogotoalha from "./assets/jogo de toalha.jpeg";
import travesseiros from "./assets/travesseiros.jpeg";
import jantanoivos from "./assets/jantanoivos.jpeg";
import luademel from "./assets/luademel.jpeg";

import { useMemo, useState } from "react";
import {
  CalendarDays,
  Clock,
  MapPin,
  Gift,
  CheckCircle,
  Heart,
  ExternalLink,
  MessageCircle,
  Sparkles,
  ChevronDown,
} from "lucide-react";
import "./App.css";

export default function App() {
  const [nome, setNome] = useState("");
  const [quantidade, setQuantidade] = useState("1");
  const [mensagem, setMensagem] = useState("");

  const dados = {
    noivo: "Welington Luis da Silva",
    noiva: "Leidiane dos Santos Pereira",
    data: "05/07",
    horario: "11:30h",
    local: "Espaço de Festa Princesa",
    endereco:
      "Alameda Dona Egercina Borges, Qd.K41 Lt.13, Bairro Independência, Aparecida de Goiânia - GO",
    maps: "https://maps.app.goo.gl/wCqWVnZY3Yv1Dg7N8",
    whatsappConfirmacao: "5562993459243", // Troque pelo WhatsApp real. Ex: 556299999999
  };

  const textoWhatsApp = useMemo(() => {
    return encodeURIComponent(
      `Olá! Confirmo minha presença no casamento de ${dados.noivo} e ${dados.noiva}.\n\nNome: ${nome}\nQuantidade de pessoas: ${quantidade}\nMensagem: ${mensagem}`
    );
  }, [nome, quantidade, mensagem]);

  const linkWhatsApp = `https://wa.me/${dados.whatsappConfirmacao}?text=${textoWhatsApp}`;

  return (
    <main className="site-casamento">
      <section className="hero" id="inicio">
        <div className="decor decor-1">❀</div>
        <div className="decor decor-2">❀</div>
        <div className="hero-conteudo">
          <div className="linha-topo">
            <span></span>
            <Sparkles size={24} />
            <span></span>
          </div>

          <p className="subtitulo">Com alegria, convidamos você para celebrar conosco o nosso</p>
          <Heart className="heart" fill="currentColor" />
          <h1>Casamento</h1>

          <div className="nomes-site">
            <p>{dados.noivo}</p>
            <strong>&</strong>
            <p>{dados.noiva}</p>
          </div>

          <div className="data-hero">
            <div>
              <CalendarDays size={22} />
              <span>{dados.data}</span>
            </div>
            <div>
              <Clock size={22} />
              <span>{dados.horario}</span>
            </div>
          </div>

          <a href="#detalhes" className="scroll-down">
            Ver detalhes
            <ChevronDown size={22} />
          </a>
        </div>
      </section>

      <section className="secao detalhes" id="detalhes">
        <div className="secao-titulo animar">
          <span>Nosso grande dia</span>
          <h2>Detalhes do Evento</h2>
          <p>Sua presença tornará esse momento ainda mais especial.</p>
        </div>

        <div className="localizacao-destaque animar">
          <div className="info-icone">
            <MapPin />
          </div>

          <h3>Localização</h3>

          <h4>{dados.local}</h4>

          <p>{dados.endereco}</p>

          <a
            className="botao"
            href={dados.maps}
            target="_blank"
            rel="noreferrer"
          >
            Abrir no Google Maps <ExternalLink size={18} />
          </a>
        </div>
      </section>


      <section className="secao confirmacao">
        <div className="secao-titulo animar">

          <h2>Confirme sua Presença</h2>
          <p>Preencha os dados abaixo e envie a confirmação pelo WhatsApp.</p>
        </div>

        <div className="form-card animar">
          <input
            placeholder="Seu nome"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
          />

          <input
            placeholder="Quantidade de pessoas"
            value={quantidade}
            onChange={(e) => setQuantidade(e.target.value)}
          />

          <textarea
            placeholder="Mensagem opcional"
            value={mensagem}
            onChange={(e) => setMensagem(e.target.value)}
          />

          <a className="botao" href={linkWhatsApp} target="_blank" rel="noreferrer">
            Confirmar pelo WhatsApp <MessageCircle size={18} />
          </a>
        </div>
      </section>

      <section className="secao presentes">
        <div className="secao-titulo animar">
          <span>Nosso Lar</span>
          <h2>Lista de Presentes</h2>
        </div>

        <div className="presentes-grid">

          <Presente
            imagem={jogopote1}
            nome="Jogo de Potes Herméticos"
          />

          <Presente
            imagem={jogotalher}
            nome="Faqueiro Inox Tramontina"
          />

          <Presente
            imagem={jogotoalha}
            nome="Jogo de Toalhas"
          />

          <Presente
            imagem={travesseiros}
            nome="Travesseiros"
          />

          <Presente
            imagem={jogotacas}
            nome="Jogo de Taças"
          />

          <Presente
            imagem={jogopote2}
            nome="Kit de Potes Herméticos"
          />

          <Presente
            imagem={jogocama}
            nome="Jogo de Cama Queen"
          />

          <Presente
            imagem={conjuntosobremesa}
            nome="Conjunto Sobremesa"
          />

          <Presente
            imagem={jantanoivos}
            nome="Primeiro jantar dos noivos.
                  R$ 50,00.
                  Chave pix: djgynn@gmail.com"
          />

          <Presente
            imagem={luademel}
            nome="Viagem de lua de mel.
            R$ 100,00.
            Chave pix: djgynn@gmail.com"
          />

        </div>
      </section>

      <footer>
        <Heart fill="currentColor" />
        <p>{dados.noivo} & {dados.noiva}</p>
      </footer>
    </main>
  );
}

function Info({ icon, titulo, texto, grande }) {
  return (
    <div className={`info-site animar ${grande ? "info-grande" : ""}`}>
      <div className="info-icone">{icon}</div>

      <h3>{titulo}</h3>

      <p className={grande ? "texto-grande" : ""}>
        {texto}
      </p>
    </div>
  );
}

function Presente({ imagem, nome }) {
  return (
    <div className="presente-card animar">
      <img src={imagem} alt={nome} />

      <div className="presente-info">
        <h3 style={{ whiteSpace: "pre-line" }}>
          {nome}
        </h3>
      </div>
    </div>
  );
}