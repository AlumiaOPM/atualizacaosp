import React from "react";

import Footer from '../../components/FooterNew';

import styles from './index.module.css';

export default function PoliticaDePrivacidade() {
  let article = 'a';
  let name = 'ESPM';
  let url = 'https://atualizacaosp.espm.br/';
  let urlMask = 'atualizacaosp.espm.br';

  return (
    <div>
      <div className={styles.container}>
        <h2>Termos e condições de uso</h2>
        <p>Prezado Usuário,</p>
        <p>Leia atentamente os Termos e Condições de Uso abaixo, os quais regularão todos os serviços de cursos online oferecidos pel{article} <b>{name}</b>. A partir do momento em que você adquire os cursos, você declara que tem ciência e concorda expressamente com todas as condições aqui citadas. Os Termos de Uso incluem a nossa Política de Privacidade, que contém as regras e condições do uso que fazemos dos seus dados pessoais.</p>
        <p>{article.toUpperCase()} <b>{name}</b> reserva-se, a qualquer tempo, o direito de alterar, suprimir e/ou ampliar o presente conteúdo sem comunicação prévia ou posterior aos usuários. O usuário deve verificar este documento periodicamente a fim de conhecer eventuais mudanças em seus termos.</p>

        <ol>
          <li>DEFINIÇÕES
            <ol>
              <li>Curso: pacote de cursos comercializados e disponibilizados através do site.</li>
              <li>Site: <a href={url} target="_blank" rel="noreferrer">{urlMask}</a> e seus subdomínios</li>
              <li>Termos e condições de uso: documento que contém as condições para o acesso ao site e aos cursos.</li>
              <li>Usuário ou Cliente: Pessoas físicas e jurídicas que adquirem os cursos disponíveis no Site.</li>
              <li>Partes: <b>{name}</b> e a pessoa física ou jurídica que adquirir os Cursos.</li>
              <li>Contrato: este documento, que disciplina as condições da compra e venda do curso.</li>
            </ol>
          </li>
          <li>OBJETO
            <ol>
              <li>O objeto do presente Contrato é a prestação de serviços educacionais, na modalidade de ensino a distância / online de acordo com a legislação aplicável e com este Contrato, comprometendo-se as partes a cumpri-lo com base na boa-fé e no equilíbrio contratual.</li>
              <li>Por esse Contrato {article} <b>{name}</b> disponibiliza ao usuário diversas opções de cursos online abordando diferentes temas, sendo os cursos disponibilizados na plataforma.</li>
              <li> Os cursos disponibilizados, possuem suas características, público alvo, conteúdo programático, duração, número de módulos, dentre outros dados necessários, disponíveis no site  <a href={url} target="_blank" rel="noreferrer">{urlMask}</a> e seus subdomínios</li>
            </ol>
          </li>
          <li>RESPONSABILIDADES E DIREITOS
            <ol>
              <li>{article.toUpperCase()} {name} compromete-se a:
                <ol>
                  <li>prestar os serviços dentro dos prazos, dos parâmetros e das rotinas estabelecidos neste contrato, com a observância dos preceitos éticos e profissionais e das recomendações aceitas pela boa técnica, pelas normas e pela legislação pertinente;</li>
                  <li>informar aos usuários ou clientes as atividades programadas para os cursos contratados;</li>
                  <li>disponibilizar o material didático dos cursos ao usuário, possibilitando a realização do download de textos e infográficos;</li>
                  <li>disponibilizar “conta-logon” e senha ao usuário para acesso ao conteúdo dos cursos;</li>
                  <li>disponibilizar orientações necessárias sobre o curso ao usuários, por meio de um endereço eletrônico; e</li>
                  <li>disponibilizar ao usuário ferramenta para emissão de certificado de conclusão ao usuário, caso este conclua o curso.</li>
                </ol>
              </li>
              <li>O USUÁRIO compromete-se a:
                <ol>
                  <li>efetuar o pagamento dos cursos conforme convencionado, nos prazos e formas contratados;</li>
                  <li>utilizar-se de equipamentos e softwares, com os requisitos mínimos exigidos com acesso à internet e possuir um endereço eletrônico e telefone para permanentemente contato d{article} <b>{name}</b>;</li>
                  <li>zelar pela confidencialidade de sua senha e login, de forma a não permitir compartilhamento;</li>
                  <li>responder a todas as mensagens recebidas no prazo estabelecido pel{article} <b>{name}</b>;</li>
                  <li>se aplicável participar das avaliações propostas segundo normas estabelecidas pel{article} <b>{name}</b>;</li>
                  <li>acessar os cursos a qualquer momento e quantas vezes desejar com comodidade e privacidade, durante o período contratado. Decorrido este prazo, o acesso será bloqueado automaticamente.</li>
                </ol>
              </li>
            </ol>
          </li>
          <li>INFORMAÇÕES SOBRE OS CURSOS ONLINE
            <ol>
              <li>O CNPJ d{article} <b>{name}</b> está registrado e autorizado a oferecer cursos na modalidade Online.</li>
              <li>Os cursos online ficam disponíveis na conta do usuário na plataforma online indicada, pelo período de vigência do plano contratado. Durante esse período o usuário poderá assistir os conteúdos digitais e multimídias quantas vezes julgar necessário.</li>
              <li>É de responsabilidade do usuário, antes da aquisição dos cursos verificar o conteúdo disponível, pré-requisitos para realização dos cursos, sendo necessários cumpri-los, seja na aquisição de outros cursos ou no conhecimento de ferramentas, sistemas ou softwares.</li>
              <li>O usuário deverá usar os softwares ou sistema nas mesmas versões aplicadas aos cursos, sendo de responsabilidade do usuário conferir as versões de cada software e suas especificações disponíveis na página dos cursos.</li>
              <li>As licenças dos softwares utilizados nos cursos não serão disponibilizadas aos usuários, sendo que, as mesmas deverão ser adquiridas junto às empresas detentoras dos softwares.</li>
              <li>Os professores, administradores ou moderadores poderão prestar suporte ao usuário que esteja utilizando versão de software ou sistema diferente da recomendada, visando sanar eventuais dúvidas.</li>
            </ol>
          </li>
          <li>FORMAS DE PAGAMENTO
            <ol>
              <li>No momento da aquisição dos cursos o usuário ou cliente deverá escolher a forma de pagamento, dentre elas, são disponibilizadas cartão de crédito onde as compras poderão ser parceladas nos termos e condições descritos no site.</li>
              <li>Em ambas as formas de pagamento o usuário ou cliente é responsável pelo preenchimento correto das informações necessárias no ato da compra.</li>
              <li>Caso o usuário ou cliente opte pelo pagamento parcelado no cartão de crédito, a quitação do débito é de responsabilidade do mesmo junto à operadora de cartão.
                <ol>
                  <li>O pagamento realizado por meio de cartão de crédito se dará por empresa indicada no site que será responsável pela conexão segura, não possuindo {article} <b>{name}</b> acesso a dados de pagamento.</li>
                  <li>É de responsabilidade do usuário ou cliente manter seus computadores, dispositivos e redes seguras com proteção adequada visando evitar quaisquer problemas durante pagamentos realizados pela internet.</li>
                </ol>
              </li>
              <li>Caso o usuário ou cliente opte pelo pagamento mediante emissão de boleto e o pagamento não ocorra até a data de seu vencimento, as partes convencionam que o boleto será automaticamente cancelado, devendo o usuário realizar nova compra.</li>
              <li>Compete exclusivamente a <b>{name}</b> definir a sua política comercial e os seus critérios para concessão de descontos e modalidades de pagamento.</li>
              <li>A assinatura ou aquisição de curso poderá ser cancelada até o início do curso, onde será cobrado uma multa de 20% no valor pago. Depois do início, caso haja cancelamento, o cliente ou usuário pagará pelo tempo estudado.</li>
              <li>O cancelamento da assinatura, seja por requerimento prévio junto a <b>{name}</b> ou por solicitação unilateral junto a operadora de cartão de crédito, resultará na interrupção de acesso aos cursos imediatamente.</li>
              <li>{article.toUpperCase()} <b>{name}</b> poderá cancelar a assinatura do usuário sem devolução do pagamento a qualquer momento sem aviso ou notificação prévia, caso identifique utilização indevida ou ilicitudes que firam os termos deste contrato.
                <ol>
                  <li>Caso o usuário tenha sua assinatura cancelada, seu acesso à plataforma poderá ser bloqueado ficando o mesmo impedido de realizar novas assinaturas.</li>
                </ol>
              </li>
            </ol>
          </li>
          <li>ALTERAÇÕES DE PREÇOS
            <ol>
              <li>As alterações dos valores serão aplicadas em novas assinaturas ou na aquisição de novos cursos, os usuários que já possuem assinatura continuarão pagando os mesmos valores sem a incidência de aumento ou decréscimo.</li>
            </ol>
          </li>
        </ol>

        <p><b>E, por ter lido e estar de acordo com o conteúdo do presente instrumento, o (a) CONTRATANTE opta por aceitá-lo em sua integralidade, fazendo com que surtam os efeitos jurídicos próprios.</b></p>

        <h2>Política de Privacidade e Segurança</h2>

        <p>Este documento é parte integrante dos nossos <b>Termos de Uso</b>, que regularão todos os serviços de cursos online oferecidos pel{article} <b>{name}</b>. A presente política tem por finalidade estabelecer as regras de tratamento dos seus dados coletados, além de deixar claro o compromisso d{article} <b>{name}</b> em garantir a proteção dos dados solicitados, em conformidade com a legislação aplicável, ao seguinte domínio: <a href={url} target="_blank" rel="noreferrer">{urlMask}</a> e seus subdomínios. </p>
        <p><b>Quando você navega em nosso site e toma conhecimento de nossa Política de Privacidade confere sua livre e expressa concordância com os termos aqui estipulados.</b></p>
        <p>Os conceitos aqui adotados são os conceitos definidos no artigo 5º, da Lei Geral de Proteção de Dados Pessoais (lei nº 13.709/2018), <a href="http://www.planalto.gov.br/ccivil_03/_ato2015-2018/2018/lei/L13709.htm" rel="noopener">disponível aqui.</a></p>

        <ol>
          <li>INFORMAÇÕES COLETADAS
            <p>Coletamos os seus dados conforme o seu acesso e uso dos nossos sites, aplicativos e serviços ofertados pel{article} <b>{name}</b> ou por parceiros que tenham sido devidamente autorizados por nós.</p>
            <ol>
              <li>As informações serão coletadas:
                <ol>
                  <li>Quando você, voluntariamente, preencher o cadastro disponível em nosso site/aplicativo;</li>
                  <li>Durante a sua navegação em nossos sites, sendo armazenadas no navegador do seu computador;</li>
                  <li>Para enviar newsletters ou informar sobre promoções e concursos, desde que você nos dê autorização para isso;</li>
                  <li>De parceiros que tenham obtido autorização para compartilhá-los com {article} <b>{name}</b>.</li>
                </ol>
              </li>
              <li>As informações que {article} <b>{name}</b> coleta podem incluir, mas não se limitam a:
                <ol>
                  <li>Dados cadastrais e endereço;</li>
                  <li>Dados para a verificação de identidade do Usuário;</li>
                  <li>Dados para os processos de gestão de dados; e</li>
                  <li>Dados de navegação.</li>
                </ol>
              </li>
              <li>A veracidade das informações fornecidas por você são de sua responsabilidade, sendo de suma importância a exatidão destas informações para que {article} <b>{name}</b> realize o tratamento de forma adequada em seu interesse. É por meio destes dados que o contataremos e forneceremos nossos produtos e serviços a você.</li>
              <li>Coleta de dados por meio de cookies:
                <p>Aqui, você encontrará informações objetivas e claras sobre o que são Cookies, quais Cookies utilizamos em nosso site, qual papel desempenham e como configurá-los.</p>

                <p><b>O que são cookies?</b></p>
                <p>Cookies são pequenos arquivos de texto ou fragmentos de informação que são armazenados em seu dispositivo quando você visita nosso site. Servem para registrar informações que serão usadas em uma próxima visita, a fim de melhorar sua experiência de uso.</p>
                <p>É importante ressaltar que contém informações pessoais específicas, como dados sensíveis. São eles: telefone e e-mail.</p>

                <p>Tipos de cookies que {article} <b>{name}</b> utiliza:</p>

                <p>Quanto à propriedade, os cookies podem ser:</p>
                <ol>
                  <li><b>Cookies proprietários ou primários:</b> são cookies definidos por nós ou por terceiros em nosso nome.</li>
                  <li><b>Cookies de terceiros:</b> são cookies definidos por terceiros confiáveis em nossa aplicação.</li>
                </ol>

                <p>Os cookies, quanto ao seu tempo de vida, podem ser:</p>
                <ol>
                  <li><b>Cookies de sessão ou temporários:</b> são cookies que expiram assim que você fecha o seu navegador, encerrando a sessão.</li>
                  <li><b>Cookies persistentes ou permanentes:</b> são cookies que permanecem no seu dispositivo durante um período determinado ou até que você os exclua.</li>
                </ol>

                <p>Os cookies, quanto a sua finalidade, podem ser:</p>
                <ol>
                  <li><b>Cookies necessários:</b>são cookies essenciais que possibilitam a navegação em nossas aplicações e o acesso a todos os recursos; sem estes, nossos serviços podem apresentar mau desempenho ou não funcionar. São geralmente de Sessão e Próprios.</li>
                  <li><b>Cookies de desempenho:</b>são cookies que otimizam a forma que nossas aplicações funcionam, coletando informações anônimas sobre as páginas acessadas. São geralmente próprios.</li>
                  <li><b>Cookies de funcionalidade:</b>são cookies que memorizam suas preferências e escolhas (como seu nome de usuário). São geralmente próprios e permanentes.</li>
                  <li><b>Cookies de publicidade:</b>são cookies que direcionam anúncios em função dos seus interesses e limitam a quantidade de vezes que o anúncio aparece. São geralmente permanentes e podem ser de terceiros.</li>
                  <li><b>Cookies de mídias sociais:</b>permitem que você se conecte com mídias sociais, tais como LinkedIn, Twitter, Facebook e Instagram. São geralmente permanentes e de Terceiros.</li>
                  <li><b>Cookies de segurança:</b>nos ajudam a monitorar atividades fraudulentas e proteger os seus dados em acessos não autorizados. São geralmente permanentes e de Terceiros.</li>
                </ol>

                <p><b>Gerenciamento de cookies</b></p>

                <p>A permissão do uso de cookies está sujeita ao seu consentimento. Apesar da maioria dos navegadores estarem inicialmente configurados para aceitar cookies de forma automática, você pode rever suas permissões a qualquer tempo, de forma a bloqueá-los, aceitá-los ou ativar notificações para quando alguns cookies forem enviados ao seu dispositivo.</p>
                <p>Em nosso site, na primeira vez que você acessar nossas aplicações, será requerida a sua concordância com a instalação destes. Apenas após a sua aceitação eles serão ativados.</p>
              </li>

            </ol>
          </li>
          <li>USO DOS DADOS
            <p>Os dados poderão ser acessados pel{article} <b>{name}</b>, parceiros, subcontratados e autoridades, de forma a possibilitar as funcionalidades dos nossos sites/aplicativos e os produtos e serviços por nós ofertados, ou mediante requisição de autoridades públicas nos moldes da legislação. Lembre-se, caso você acesse funcionalidades ou sites de parceiros, estará em outro ambiente e sujeito às práticas e políticas próprias desses parceiros.</p>
            <ol>
              <li>Os dados coletados dos usuários poderão ser utilizados para as seguintes finalidades:
                <ol>
                  <li>Identificação, autenticação e autorização;</li>
                  <li>Atender adequadamente às solicitações e dúvidas, bem como prestar suporte aos usuários;</li>
                  <li>Manter atualizados cadastros para fins de contato por telefone, mensagens ou por outros meios de comunicação;</li>
                  <li>Aperfeiçoar o uso e a experiência interativa durante a navegação nos sites, aplicativos e serviços prestados pel{article} <b>{name}</b>;</li>
                  <li>Efetuar estatísticas, estudos, pesquisas, planejamento de projetos e levantamentos pertinentes às atividades e comportamentos do usuário ao utilizar os sites e serviços prestados pel{article} <b>{name}</b>;</li>
                  <li>Promover os serviços d{article} <b>{name}</b> e de seus parceiros, além de informar sobre novidades, funcionalidades, conteúdos, notícias e demais informações relevantes para a manutenção do relacionamento com {article} <b>{name}</b>;</li>
                  <li>Colaborar e/ou cumprir ordem judicial ou requisição por autoridade administrativa, bem como atender obrigações de reportar preventivamente determinadas atividades para autoridades competentes;</li>
                  <li>Prosseguir com pedidos de pagamento efetuados pelos usuários;</li>
                  <li>Enviar newsletters e e-mails que o usuário expressamente concordar em receber;</li>
                  <li>Gerenciar riscos e detectar, prevenir e/ou remediar fraudes ou outras atividades potencialmente ilegais ou proibidas, além de violações de políticas ou termos de uso aplicáveis;</li>
                  <li>Compartilhar informações de pagamento entre {article} <b>{name} e parceiros</b>, visando facilitar a experiência dos usuários ao utilizar os sites, aplicativos e serviços oferecidos;</li>
                  <li>Consultar os dados em bureaus privados e públicos para verificar se estão corretos, atualizá-los ou solicitar dados complementares.</li>
                </ol>
              </li>
              <li>O uso, acesso e compartilhamento da base de dados formada nos termos da presente Política de Privacidade serão feitos dentro dos limites e propósitos das atividades d{article} <b>{name}</b>, podendo ser fornecidas e disponibilizadas para acesso e/ou consulta para as empresas parceiros de negócios, fornecedores, prestadores de serviço, subcontratados, autoridades ou terceiros em geral, desde que obedecido o disposto na presente Política de Privacidade, na Legislação Aplicável ou por determinação judicial.</li>
              <li>{article.toUpperCase()} <b>{name}</b> se compromete a resguardar o seu sigilo ﬁnanceiro e bancário através do não compartilhamento dessas informações com empresas com as quais você não tenha concordado. Você reconhece que {article} <b>{name}</b> é obrigada a atender uma série de obrigações legais em decorrência da legislação aplicável relacionadas com a identidade de seus clientes e a origem dos fundos que opera.</li>
              <li>Lembramos que você é responsável pelo sigilo, utilização e todos os atos no uso das Credenciais (tais como, mas não limitados a, login, senha e token de autenticação). Caso você identiﬁque ou desconﬁe que um terceiro tenha acesso à sua senha, deverá alterar diretamente nos sistemas ou serviços, ou nos solicitar auxílio por meio do telefone d{article} <b>{name}</b>. Lembre-se que o compartilhamento de Credenciais decorrente de sua ação conﬁgura um risco a segurança da sua informação e violação a esta Política de Privacidade.</li>
              <li>Desde já você está ciente que {article} <b>{name}</b> poderá realizar (i) a anonimização dos Dados Pessoais, tornando-os Dados Anonimizados; (ii) o enriquecimento da sua base de dados, adicionando informações oriundas de outras fontes legítimas; e (iii) tratamento de Dados Pessoais com base no legítimo interesse d{article} <b>{name}</b>, conforme previsto na Legislação Aplicável.</li>
              <li>Você reconhece e concorda que {article} <b>{name}</b> poderá utilizar os dados para traçar o seu perﬁl, de forma a aprimorar os seus serviços ou atender a legislação aplicável, incluindo, mas não se limitando, obrigações de conheça-o-seu-cliente. O perﬁl do usuário será compartilhado exclusivamente nos termos da presente Política de Privacidade ou da legislação aplicável.</li>
              <li>Internamente, os dados somente serão acessados por proﬁssionais devidamente autorizados pel{article} <b>{name}</b>, respeitando os princípios da ﬁnalidade, adequação e necessidade, entre outros previstos na legislação aplicável, para os objetivos d{article} <b>{name}</b>, além do compromisso de conﬁdencialidade e preservação da privacidade nos termos desta Política de Privacidade.</li>
              <li>Os dados anonimizados poderão ser coletados, tratados, armazenados, utilizados, transferidos e divulgados para qualquer ﬁnalidade, independentemente da sua autorização, nos termos da Lei nº 13.709/2018.</li>
              <li>{article.toUpperCase()} <b>{name}</b> preza pela segurança e inviolabilidade das suas credenciais. Por esse motivo constantemente busca e monitora a internet em suas diversas camadas com a ﬁnalidade de identiﬁcar, coletar e tratar para ﬁns de validação (testes de autenticação) logins e senhas potencialmente pertencentes aos usuários que tenham sido indevidamente publicados na internet por terceiros.</li>
              <li>Se por meio de testes de autenticação {article} <b>{name}</b> constatar que as suas credenciais foram comprometidas (tornadas acessíveis para terceiros), {article} <b>{name}</b> – por segurança e no intuito de impedir o acesso inapropriado de terceiros a sua conta e dados – bloqueará preventivamente as suas credenciais. Havendo dúvidas sobre, você pode consultar o <b>termo e condições de uso em nosso  site</b>.</li>
            </ol>
          </li>
          <li>ARMAZENAMENTO DOS DADOS
            <p>Armazenamos os seus dados em local seguro. A qualquer momento, você poderá solicitar a exibição, correção ou exclusão dos seus dados. Lembramos que poderemos manter os seus dados coletados para cumprimento legal, auditoria e preservação de direitos, pelo prazo necessário para cumprir essas responsabilidades.</p>

            <ol>
              <li>Os seus dados coletados estarão armazenados em ambiente seguro e controlado. No entanto, eventuais danos e/ou prejuízo decorrentes de falhas, vírus ou invasões do banco de dados dos sites, aplicativos e serviços por nós oferecidos podem ocorrer, de maneira que a <b>{name}</b> não medirá esforços em garantir a segurança dos seus dados adotando as medidas de segurança adequadas. Caso tais eventos ocorram, notificaremos os usuários afetados, sendo tomada todas as medidas cabíveis.</li>
              <li>Os seus dados obtidos poderão ser armazenados em servidor próprio d{article} <b>{name}</b> ou de terceiro contratado para esse ﬁm, na hipótese de mantermos nossa base de dados em servidores de terceiros, exigiremos que os dados estejam armazenados conforme os padrões legais aplicáveis de segurança e controle.</li>
            </ol>
          </li>
          <li>DIREITOS DOS TITULARES DE DADOS PESSOAIS
            <ol>
              <li>{article.toUpperCase()} <b>{name}</b> está comprometida em garantir a proteção de seus direitos sob as leis aplicáveis, incluindo o respeito aos seus direitos, a serem exercidos mediante a solicitação destinada ao nosso DPO através do telefone d{article} <b>{name}</b></li>
              <ol>
                <li>Direito de confirmação da existência de tratamento: você possui o direito de receber confirmação sobre a existência de tratamento de seus dados pessoais.</li>
                <li>Direito de acesso e de retificação: você pode solicitar acesso aos seus dados pessoais, assim como, a correção de dados pessoais imprecisos, incompletos ou desatualizados, além de poder solicitar uma cópia dos dados pessoais tratados pelo Controlador.</li>
                <li>Direito de eliminação dos dados pessoais: o direito de eliminação concede a você o direito de solicitar a exclusão de seus dados pessoais (i) nos casos em que os dados não são mais necessários, (ii) em que houver retirada do seu consentimento, (iii) em que existir uma obrigação legal de apagar seus dados pessoais.</li>
                <li>Direito de portabilidade: a portabilidade dos dados pessoais fornecidos, em um formato estruturado, comumente utilizado. Você possui o direito de transmitir esses dados para outro Controlador ou a há terceiro escolhido, sem impedimentos.</li>
                <li>Direito de informação: você possui o direito de ser informado, de maneira clara e acessível, sobre a coleta e uso de seus dados pessoais, sendo necessário garantir ao titular de dados informações como o propósito do tratamento de dados, o período de retenção, e com quem será compartilhada a informação; a possibilidade de não fornecer o consentimento e as consequências de sua negativa; as entidades públicas ou privadas com as quais o Controlador realizou compartilhamento de seus dados pessoais.</li>
                <li>Revogação do consentimento: você tem o direito de solicitar a revogação do consentimento, quando o tratamento de dados tiver como fundamento a base legal do consentimento.</li>
                <li>Direito de solicitar revisão ao tratamento automatizado: solicitar a revisão de decisão tomada unicamente com base em tratamento automatizado de dados pessoais que afetem seus interesses, incluídas as decisões destinadas a definir o seu perfil pessoal, profissional, de consumo e de crédito ou os aspectos de sua personalidade.</li>
              </ol>
            </ol>
          </li>
          <li>DISPOSIÇÕES GERAIS
            <p>A presente Política de Privacidade está sujeita a alterações regulares para garantir que esteja atualizada com o uso de suas informações pessoais e conforme a legislação aplicável.</p>
            <ol>
              <li>Eventuais atualizações na presente política, notificaremos todos os usuários, mediante as ferramentas disponíveis nos sites, aplicativos e serviços por nós prestados e/ou meios de contato fornecidos por você.</li>
              <li>Caso possua quaisquer dúvidas sobre a presente Política de Privacidade ou queira exercer algum dos seus direitos elencados na cláusula 4, você poderá entrar em contato através do canal de atendimento pelo telefone d{article} <b>{name}</b>.</li>
              <li>Caso você considere que violamos alguma disposição legal ou desta Política de Privacidade, você tem o direito de apresentar uma reclamação em nossos canais de atendimento, além de peticionar junto à autoridade competente caso entenda necessário.</li>
              <li>Empresas terceirizadas que realizem o processamento de quaisquer dados coletados por nós, deverão respeitar as condições aqui estipuladas e as normas de Segurança da Informação d{article} <b>{name}</b>, obrigatoriamente.</li>
              <li> Na eventualidade de alguma disposição desta Política de Privacidade ser considerada ilegal ou ilegítima pela autoridade competente da localidade em que o usuário resida ou da sua conexão à internet, as demais condições permanecerão em pleno vigor e efeito.</li>
            </ol>
          </li>
          <p><b>Atualização: 15 de Maio de 2021.</b></p>
        </ol>
      </div>
      <Footer />
    </div>
  );
};
