"use client"

import { motion } from "framer-motion"

interface PrivacyContentProps {
  currentLang: "pt" | "en"
}

export function PrivacyContent({ currentLang }: PrivacyContentProps) {
  return (
    <section className="pt-32 pb-16 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl md:text-6xl font-black mb-6 text-center">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#20BCED] via-[#B6E1F2] to-[#126AF9]">
              {currentLang === "pt" ? "Política de Privacidade" : "Privacy Policy"}
            </span>
          </h1>

          <div className="mt-12 glass-floating rounded-xl p-8 md:p-12 relative overflow-hidden">
            {/* Background effect */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#126AF9]/10 rounded-full blur-3xl -z-10"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#20BCED]/10 rounded-full blur-3xl -z-10"></div>

            <div className="prose prose-invert max-w-none text-white">
              {currentLang === "pt" ? (
                <>
                  <h2 className="text-2xl font-bold text-center">Política de Privacidade – Versão Brasil</h2>
                  <p className="text-center text-[#B6E1F2]/80">Última atualização: 18 de abril de 2025</p>

                  <h3 className="text-xl font-bold mt-8">1. Introdução</h3>
                  <p>
                    A Gargantua Technologies ("Gargantua", "nós", "nosso") leva a sério a proteção dos seus dados
                    pessoais. Esta Política de Privacidade ("Política") descreve como coletamos, usamos, compartilhamos
                    e armazenamos informações quando você acessa qualquer site, aplicativo, API ou outro serviço on‑line
                    que faça referência a esta Política (coletivamente, "Serviços"). Ao utilizar os Serviços, você
                    concorda com as práticas aqui descritas.
                  </p>

                  <h3 className="text-xl font-bold mt-6">2. Abrangência</h3>
                  <p>Aplica‑se a dados coletados:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>On‑line, por meio dos nossos Serviços;</li>
                    <li>Off‑line, em eventos, reuniões, suporte ou processos comerciais.</li>
                  </ul>
                  <p>
                    Não se aplica a sites ou serviços de terceiros que não controlamos, ainda que tenham links ou
                    integrações nos nossos Serviços.
                  </p>

                  <h3 className="text-xl font-bold mt-6">3. Dados Pessoais que Coletamos</h3>
                  <div className="overflow-x-auto">
                    <table className="min-w-full border border-[#126AF9]/30 rounded-lg">
                      <thead>
                        <tr className="bg-[#126AF9]/10">
                          <th className="py-2 px-4 border-b border-[#126AF9]/30 text-left">Categoria</th>
                          <th className="py-2 px-4 border-b border-[#126AF9]/30 text-left">Exemplos</th>
                          <th className="py-2 px-4 border-b border-[#126AF9]/30 text-left">Origem</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="py-2 px-4 border-b border-[#126AF9]/30 font-medium">Identificadores</td>
                          <td className="py-2 px-4 border-b border-[#126AF9]/30">
                            Nome, e‑mail, telefone, endereço, CPF/CNPJ, endereço IP
                          </td>
                          <td className="py-2 px-4 border-b border-[#126AF9]/30">
                            Fornecidos por você; capturados automaticamente
                          </td>
                        </tr>
                        <tr>
                          <td className="py-2 px-4 border-b border-[#126AF9]/30 font-medium">
                            Profissionais/Empresariais
                          </td>
                          <td className="py-2 px-4 border-b border-[#126AF9]/30">
                            Empresa, cargo, nicho, nº de funcionários, escopo do projeto
                          </td>
                          <td className="py-2 px-4 border-b border-[#126AF9]/30">Formulários, contratos, reuniões</td>
                        </tr>
                        <tr>
                          <td className="py-2 px-4 border-b border-[#126AF9]/30 font-medium">Financeiros</td>
                          <td className="py-2 px-4 border-b border-[#126AF9]/30">
                            Dados de cobrança, últimos dígitos do cartão, informações bancárias
                          </td>
                          <td className="py-2 px-4 border-b border-[#126AF9]/30">Você; processadores de pagamento</td>
                        </tr>
                        <tr>
                          <td className="py-2 px-4 border-b border-[#126AF9]/30 font-medium">Dados de Navegação</td>
                          <td className="py-2 px-4 border-b border-[#126AF9]/30">
                            Tipo de navegador, SO, páginas visitadas, tempo de sessão, cookies
                          </td>
                          <td className="py-2 px-4 border-b border-[#126AF9]/30">Capturados automaticamente</td>
                        </tr>
                        <tr>
                          <td className="py-2 px-4 border-b border-[#126AF9]/30 font-medium">
                            Geolocalização aproximada
                          </td>
                          <td className="py-2 px-4 border-b border-[#126AF9]/30">
                            Cidade/Estado derivados do IP ou configurações do dispositivo
                          </td>
                          <td className="py-2 px-4 border-b border-[#126AF9]/30">Automaticamente</td>
                        </tr>
                        <tr>
                          <td className="py-2 px-4 border-b border-[#126AF9]/30 font-medium">Conteúdo do Usuário</td>
                          <td className="py-2 px-4 border-b border-[#126AF9]/30">
                            Arquivos, código, imagens, feedback, tickets de suporte
                          </td>
                          <td className="py-2 px-4 border-b border-[#126AF9]/30">Você</td>
                        </tr>
                        <tr>
                          <td className="py-2 px-4 border-[#126AF9]/30 font-medium">Inferências</td>
                          <td className="py-2 px-4 border-[#126AF9]/30">
                            Segmentos ou perfis gerados (ex.: "potencial cliente enterprise")
                          </td>
                          <td className="py-2 px-4 border-[#126AF9]/30">Gargantua; ferramentas de analytics</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <p className="mt-4">
                    Não coletamos dados sensíveis (art. 5º‑II, LGPD) salvo se estritamente necessário e mediante
                    consentimento explícito.
                  </p>

                  <h3 className="text-xl font-bold mt-6">4. Finalidades do Tratamento</h3>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>
                      <strong>Prestação e melhoria dos Serviços</strong> – criação de contas, entrega de projetos,
                      depuração.
                    </li>
                    <li>
                      <strong>Comunicação</strong> – respostas a solicitações, e‑mails transacionais, agendamento de
                      reuniões.
                    </li>
                    <li>
                      <strong>Marketing</strong> – newsletters, remarketing, mensuração de campanhas (§ 7).
                    </li>
                    <li>
                      <strong>Segurança e prevenção à fraude</strong> – monitoramento de logs, autenticação, análises de
                      risco.
                    </li>
                    <li>
                      <strong>Cumprimento legal</strong> – obrigações fiscais, contábeis e regulatórias (ex.: Lei
                      12.965/14, Res. BACEN 4658).
                    </li>
                    <li>
                      <strong>Análises agregadas</strong> – métricas de uso e performance.
                    </li>
                    <li>
                      <strong>Transações societárias</strong> – fusão, aquisição ou venda de ativos.
                    </li>
                  </ul>

                  <h3 className="text-xl font-bold mt-6">5. Bases Legais (LGPD, art. 7º)</h3>
                  <p>Tratamos dados com fundamento em:</p>
                  <div className="overflow-x-auto">
                    <table className="min-w-full border border-[#126AF9]/30 rounded-lg">
                      <thead>
                        <tr className="bg-[#126AF9]/10">
                          <th className="py-2 px-4 border-b border-[#126AF9]/30 text-left">Base Legal</th>
                          <th className="py-2 px-4 border-b border-[#126AF9]/30 text-left">Exemplos de aplicação</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="py-2 px-4 border-b border-[#126AF9]/30 font-medium">Execução de contrato</td>
                          <td className="py-2 px-4 border-b border-[#126AF9]/30">
                            Entrega de software, suporte, faturamento
                          </td>
                        </tr>
                        <tr>
                          <td className="py-2 px-4 border-b border-[#126AF9]/30 font-medium">Consentimento</td>
                          <td className="py-2 px-4 border-b border-[#126AF9]/30">
                            Cookies não essenciais, newsletter, eventos Meta Pixel
                          </td>
                        </tr>
                        <tr>
                          <td className="py-2 px-4 border-b border-[#126AF9]/30 font-medium">Legítimo interesse</td>
                          <td className="py-2 px-4 border-b border-[#126AF9]/30">
                            Marketing B2B, segurança da informação
                          </td>
                        </tr>
                        <tr>
                          <td className="py-2 px-4 border-b border-[#126AF9]/30 font-medium">
                            Cumprimento de obrigação legal/regulatória
                          </td>
                          <td className="py-2 px-4 border-b border-[#126AF9]/30">
                            Emissão de notas fiscais, prevenção à lavagem de dinheiro
                          </td>
                        </tr>
                        <tr>
                          <td className="py-2 px-4 border-[#126AF9]/30 font-medium">Exercício regular de direitos</td>
                          <td className="py-2 px-4 border-[#126AF9]/30">
                            Defesa em processos judiciais ou administrativos
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <h3 className="text-xl font-bold mt-6">6. Compartilhamento de Dados</h3>
                  <div className="overflow-x-auto">
                    <table className="min-w-full border border-[#126AF9]/30 rounded-lg">
                      <thead>
                        <tr className="bg-[#126AF9]/10">
                          <th className="py-2 px-4 border-b border-[#126AF9]/30 text-left">Destinatário</th>
                          <th className="py-2 px-4 border-b border-[#126AF9]/30 text-left">Finalidade</th>
                          <th className="py-2 px-4 border-b border-[#126AF9]/30 text-left">Salvaguardas</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="py-2 px-4 border-b border-[#126AF9]/30 font-medium">
                            Operadores/Subcontratados
                          </td>
                          <td className="py-2 px-4 border-b border-[#126AF9]/30">
                            Hospedagem (AWS), e‑mail (SendGrid), pagamentos (Stripe)
                          </td>
                          <td className="py-2 px-4 border-b border-[#126AF9]/30">
                            Cláusulas de confidencialidade; DPA
                          </td>
                        </tr>
                        <tr>
                          <td className="py-2 px-4 border-b border-[#126AF9]/30 font-medium">
                            Parceiros de Publicidade
                          </td>
                          <td className="py-2 px-4 border-b border-[#126AF9]/30">
                            Meta Ads, Google Ads para remarketing e atribuição
                          </td>
                          <td className="py-2 px-4 border-b border-[#126AF9]/30">Dados hash/pseudonimizados</td>
                        </tr>
                        <tr>
                          <td className="py-2 px-4 border-b border-[#126AF9]/30 font-medium">
                            Plataformas Integradas
                          </td>
                          <td className="py-2 px-4 border-b border-[#126AF9]/30">
                            APIs que você conectar (ex.: Conversions API)
                          </td>
                          <td className="py-2 px-4 border-b border-[#126AF9]/30">Conforme instruções suas</td>
                        </tr>
                        <tr>
                          <td className="py-2 px-4 border-b border-[#126AF9]/30 font-medium">
                            Consultores Profissionais
                          </td>
                          <td className="py-2 px-4 border-b border-[#126AF9]/30">Auditores, advogados, contadores</td>
                          <td className="py-2 px-4 border-b border-[#126AF9]/30">Dever legal de sigilo</td>
                        </tr>
                        <tr>
                          <td className="py-2 px-4 border-b border-[#126AF9]/30 font-medium">Autoridades</td>
                          <td className="py-2 px-4 border-b border-[#126AF9]/30">
                            Respostas a ordens judiciais ou regulatórias
                          </td>
                          <td className="py-2 px-4 border-b border-[#126AF9]/30">Verificação de legitimidade</td>
                        </tr>
                        <tr>
                          <td className="py-2 px-4 border-[#126AF9]/30 font-medium">Sucessores Empresariais</td>
                          <td className="py-2 px-4 border-[#126AF9]/30">Fusão ou aquisição</td>
                          <td className="py-2 px-4 border-[#126AF9]/30">Notificação prévia sempre que possível</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <p className="mt-4">
                    Não vendemos dados pessoais, mas o compartilhamento com parceiros de anúncios pode ser interpretado
                    como "venda/compartilhamento" pela Lei 13.709/18 em estados com legislação complementar.
                  </p>

                  <h3 className="text-xl font-bold mt-6">7. Cookies, Pixels e Tecnologias Semelhantes</h3>
                  <div className="overflow-x-auto">
                    <table className="min-w-full border border-[#126AF9]/30 rounded-lg">
                      <thead>
                        <tr className="bg-[#126AF9]/10">
                          <th className="py-2 px-4 border-b border-[#126AF9]/30 text-left">Tipo</th>
                          <th className="py-2 px-4 border-b border-[#126AF9]/30 text-left">Uso</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="py-2 px-4 border-b border-[#126AF9]/30 font-medium">
                            Estritamente necessários
                          </td>
                          <td className="py-2 px-4 border-b border-[#126AF9]/30">Login, balanceamento de carga</td>
                        </tr>
                        <tr>
                          <td className="py-2 px-4 border-b border-[#126AF9]/30 font-medium">Análise de desempenho</td>
                          <td className="py-2 px-4 border-b border-[#126AF9]/30">Google Analytics, Hotjar</td>
                        </tr>
                        <tr>
                          <td className="py-2 px-4 border-b border-[#126AF9]/30 font-medium">Publicidade</td>
                          <td className="py-2 px-4 border-b border-[#126AF9]/30">
                            Meta Pixel, Google Tag, eventos server‑side Conversions API
                          </td>
                        </tr>
                        <tr>
                          <td className="py-2 px-4 border-[#126AF9]/30 font-medium">SDKs móveis</td>
                          <td className="py-2 px-4 border-[#126AF9]/30">Notificações push, relatórios de crash</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <p className="mt-4">
                    Você pode gerenciar cookies no banner de consentimento ou nas configurações do navegador. A
                    desativação pode limitar funcionalidades.
                  </p>

                  <h3 className="text-xl font-bold mt-6">8. Integração com Meta / Facebook</h3>
                  <p>
                    Utilizamos Meta Pixel e Conversions API conforme os Meta Business Tools Terms. Os eventos enviados
                    podem incluir identificadores hash (e‑mail, telefone), carimbo de data/hora e parâmetros
                    personalizados (valor de compra, por exemplo). A Meta emprega esses dados para: (i) aferir
                    desempenho de anúncios, (ii) criar públicos semelhantes e (iii) otimizar campanhas. Ajustes de
                    preferências podem ser feitos na sua conta Meta.
                  </p>

                  <h3 className="text-xl font-bold mt-6">9. Retenção de Dados</h3>
                  <p>
                    Retemos informações pelo tempo necessário às finalidades descritas ou conforme exigido por lei.
                    Exemplos:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Leads de marketing – 2 anos desde a última interação</li>
                    <li>Registros contratuais e fiscais – 5 anos (art. 173, CTN)</li>
                    <li>Artefatos de projeto – conforme contrato ou pedido de exclusão (§ 12)</li>
                  </ul>

                  <h3 className="text-xl font-bold mt-6">10. Segurança</h3>
                  <p>Adotamos salvaguardas compatíveis com o mercado:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Criptografia em trânsito (TLS 1.2+) e em repouso (AES‑256)</li>
                    <li>Controle de acesso baseado em papéis (RBAC) e MFA</li>
                    <li>Backup periódico, monitoramento 24×7, plano de resposta a incidentes (NIST SP 800‑61)</li>
                  </ul>
                  <p>Nenhum sistema é 100 % seguro; trabalhamos continuamente para minimizar riscos.</p>

                  <h3 className="text-xl font-bold mt-6">11. Seus Direitos (LGPD, art. 18)</h3>
                  <div className="overflow-x-auto">
                    <table className="min-w-full border border-[#126AF9]/30 rounded-lg">
                      <thead>
                        <tr className="bg-[#126AF9]/10">
                          <th className="py-2 px-4 border-b border-[#126AF9]/30 text-left">Direito</th>
                          <th className="py-2 px-4 border-b border-[#126AF9]/30 text-left">Como exercer</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="py-2 px-4 border-b border-[#126AF9]/30 font-medium">
                            Confirmação da existência de tratamento
                          </td>
                          <td className="py-2 px-4 border-b border-[#126AF9]/30">
                            E‑mail para gargantua@gargantuatechnologies.com
                          </td>
                        </tr>
                        <tr>
                          <td className="py-2 px-4 border-b border-[#126AF9]/30 font-medium">Acesso aos dados</td>
                          <td className="py-2 px-4 border-b border-[#126AF9]/30">Mesmo canal</td>
                        </tr>
                        <tr>
                          <td className="py-2 px-4 border-b border-[#126AF9]/30 font-medium">
                            Correção de dados incompletos ou desatualizados
                          </td>
                          <td className="py-2 px-4 border-b border-[#126AF9]/30">—</td>
                        </tr>
                        <tr>
                          <td className="py-2 px-4 border-b border-[#126AF9]/30 font-medium">
                            Anonimização, bloqueio ou eliminação
                          </td>
                          <td className="py-2 px-4 border-b border-[#126AF9]/30">—</td>
                        </tr>
                        <tr>
                          <td className="py-2 px-4 border-b border-[#126AF9]/30 font-medium">
                            Portabilidade a outro fornecedor
                          </td>
                          <td className="py-2 px-4 border-b border-[#126AF9]/30">—</td>
                        </tr>
                        <tr>
                          <td className="py-2 px-4 border-b border-[#126AF9]/30 font-medium">
                            Informação sobre compartilhamento
                          </td>
                          <td className="py-2 px-4 border-b border-[#126AF9]/30">—</td>
                        </tr>
                        <tr>
                          <td className="py-2 px-4 border-b border-[#126AF9]/30 font-medium">
                            Revogação de consentimento
                          </td>
                          <td className="py-2 px-4 border-b border-[#126AF9]/30">
                            Link no e‑mail ou solicitação direta
                          </td>
                        </tr>
                        <tr>
                          <td className="py-2 px-4 border-[#126AF9]/30 font-medium">
                            Revisão de decisões automatizadas
                          </td>
                          <td className="py-2 px-4 border-[#126AF9]/30">—</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <p className="mt-4">
                    Responderemos em até 15 dias úteis. Poderemos solicitar comprovação de identidade.
                  </p>

                  <h3 className="text-xl font-bold mt-6">12. Instruções de Exclusão de Dados (exigência Facebook)</h3>
                  <p>Para excluir dados enviados via formulários ou integrações Meta:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>
                      Envie e‑mail a gargantua@gargantuatechnologies.com com o assunto "Exclusão Facebook", informando
                      nome completo, e‑mail e/ou telefone utilizado.
                    </li>
                  </ul>
                  <p>Processaremos a solicitação em até 30 dias corridos e confirmaremos por e‑mail.</p>

                  <h3 className="text-xl font-bold mt-6">13. Privacidade de Crianças</h3>
                  <p>
                    Nossos Serviços não se destinam a menores de 13 anos. Se tivermos ciência de dados coletados de
                    criança sem consentimento dos pais/responsáveis, eliminaremos conforme o ECA e a LGPD.
                  </p>

                  <h3 className="text-xl font-bold mt-6">14. Transferências Internacionais</h3>
                  <p>
                    Seus dados podem ser transferidos para servidores em outros países, inclusive Estados Unidos.
                    Adotamos cláusulas‑padrão, acordos de processamento e melhores práticas de segurança para garantir
                    nível de proteção adequado.
                  </p>

                  <h3 className="text-xl font-bold mt-6">15. Alterações desta Política</h3>
                  <p>
                    Podemos atualizar esta Política periodicamente. Mudanças relevantes serão notificadas no site ou por
                    e‑mail. O uso continuado após a data de vigência indica concordância com a nova versão.
                  </p>

                  <h3 className="text-xl font-bold mt-6">16. Contato</h3>
                  <p>
                    E‑mail: gargantua@gargantuatechnologies.com
                    <br />
                    Telefone: +55 (92) 98165-9541
                  </p>

                  <p className="mt-8 font-semibold">
                    Ao utilizar nossos Serviços, você confirma que leu, compreendeu e concorda com esta Política de
                    Privacidade.
                  </p>
                </>
              ) : (
                <>
                  <h2 className="text-2xl font-bold text-center">Privacy Policy – U.S. Version</h2>
                  <p className="text-center text-[#B6E1F2]/80">Last updated: April 18, 2025</p>

                  <h3 className="text-xl font-bold mt-8">1. Introduction</h3>
                  <p>
                    Ligiga LLC ("Gargantua," "we," "us," or "our") respects your privacy and is committed to protecting
                    personal information you provide to us. This Privacy Policy ("Policy") explains how we collect, use,
                    disclose, and safeguard your information when you visit any website, mobile app, API endpoint, or
                    other online service that links to it (collectively, the "Services"). By using the Services, you
                    consent to the data practices described in this Policy.
                  </p>

                  <h3 className="text-xl font-bold mt-6">2. Scope</h3>
                  <p>
                    This Policy applies to information collected (i) online through our Services and (ii) offline in the
                    context of business development, events, or customer support. It does not apply to third‑party sites
                    or services that we do not control—even if they are linked or integrated into our Services.
                  </p>

                  <h3 className="text-xl font-bold mt-6">3. Information We Collect</h3>
                  <div className="overflow-x-auto">
                    <table className="min-w-full border border-[#126AF9]/30 rounded-lg">
                      <thead>
                        <tr className="bg-[#126AF9]/10">
                          <th className="py-2 px-4 border-b border-[#126AF9]/30 text-left">Category</th>
                          <th className="py-2 px-4 border-b border-[#126AF9]/30 text-left">Examples</th>
                          <th className="py-2 px-4 border-b border-[#126AF9]/30 text-left">Collected From</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="py-2 px-4 border-b border-[#126AF9]/30 font-medium">Identifiers</td>
                          <td className="py-2 px-4 border-b border-[#126AF9]/30">
                            Name, postal address, phone, email, IP address
                          </td>
                          <td className="py-2 px-4 border-b border-[#126AF9]/30">
                            Directly from you; automatically via devices
                          </td>
                        </tr>
                        <tr>
                          <td className="py-2 px-4 border-b border-[#126AF9]/30 font-medium">
                            Professional / Business Info
                          </td>
                          <td className="py-2 px-4 border-b border-[#126AF9]/30">
                            Company name, role, industry, employee count, project details
                          </td>
                          <td className="py-2 px-4 border-b border-[#126AF9]/30">Forms, contracts, discovery calls</td>
                        </tr>
                        <tr>
                          <td className="py-2 px-4 border-b border-[#126AF9]/30 font-medium">Payment‑Related Data</td>
                          <td className="py-2 px-4 border-b border-[#126AF9]/30">
                            Billing contact, partial card data, tax ID (if applicable)
                          </td>
                          <td className="py-2 px-4 border-b border-[#126AF9]/30">You; payment processors</td>
                        </tr>
                        <tr>
                          <td className="py-2 px-4 border-b border-[#126AF9]/30 font-medium">
                            Internet / Device Info
                          </td>
                          <td className="py-2 px-4 border-b border-[#126AF9]/30">
                            Browser type, OS, referring URLs, clickstream, session time, cookies, pixels, SDK events
                          </td>
                          <td className="py-2 px-4 border-b border-[#126AF9]/30">Automatically</td>
                        </tr>
                        <tr>
                          <td className="py-2 px-4 border-b border-[#126AF9]/30 font-medium">Geolocation</td>
                          <td className="py-2 px-4 border-b border-[#126AF9]/30">
                            Approximate city/region (derived from IP or device settings)
                          </td>
                          <td className="py-2 px-4 border-b border-[#126AF9]/30">Automatically</td>
                        </tr>
                        <tr>
                          <td className="py-2 px-4 border-b border-[#126AF9]/30 font-medium">
                            User‑Generated Content
                          </td>
                          <td className="py-2 px-4 border-b border-[#126AF9]/30">
                            Files, code, text, images, feedback, support tickets
                          </td>
                          <td className="py-2 px-4 border-b border-[#126AF9]/30">You</td>
                        </tr>
                        <tr>
                          <td className="py-2 px-4 border-[#126AF9]/30 font-medium">Inference Data</td>
                          <td className="py-2 px-4 border-[#126AF9]/30">
                            Segments or profiles created from the data above (e.g., "prospective enterprise buyer")
                          </td>
                          <td className="py-2 px-4 border-[#126AF9]/30">Ourselves; analytics providers</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <p className="mt-4">
                    We do not knowingly collect Sensitive Personal Information as defined by the California Privacy
                    Rights Act ("CPRA") unless you voluntarily provide it (e.g., on a résumé) and only for the purpose
                    for which you provided it.
                  </p>

                  <h3 className="text-xl font-bold mt-6">4. How We Use Information</h3>
                  <p>We process personal information to:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>
                      <strong>Provide & Improve Services</strong> – create accounts, deliver projects, debug, and
                      enhance functionality.
                    </li>
                    <li>
                      <strong>Communicate</strong> – respond to inquiries, send transactional emails, schedule demos or
                      calls.
                    </li>
                    <li>
                      <strong>Marketing & Advertising</strong> – send newsletters, create look‑alike audiences, measure
                      campaign performance (see § 7).
                    </li>
                    <li>
                      <strong>Security & Fraud Prevention</strong> – monitor logs, authenticate users, investigate
                      misuse.
                    </li>
                    <li>
                      <strong>Compliance</strong> – meet legal, tax, and contractual obligations, including U.S.
                      export‑control and sanctions laws.
                    </li>
                    <li>
                      <strong>Analytics</strong> – understand usage trends (aggregated or de‑identified).
                    </li>
                    <li>
                      <strong>Business Transfers</strong> – support a merger, acquisition, or asset sale.
                    </li>
                  </ul>

                  <h3 className="text-xl font-bold mt-6">5. Legal Bases for Processing (when required)</h3>
                  <p>
                    Where U.S. or state law requires a legal basis (e.g., CPRA, GDPR for EU visitors), we rely on: (i)
                    contractual necessity, (ii) legitimate interests (such as security, R&D, or direct B2B marketing),
                    (iii) consent (for non‑essential cookies), and (iv) legal obligation.
                  </p>

                  <h3 className="text-xl font-bold mt-6">6. How We Share Information</h3>
                  <div className="overflow-x-auto">
                    <table className="min-w-full border border-[#126AF9]/30 rounded-lg">
                      <thead>
                        <tr className="bg-[#126AF9]/10">
                          <th className="py-2 px-4 border-b border-[#126AF9]/30 text-left">Recipient Category</th>
                          <th className="py-2 px-4 border-b border-[#126AF9]/30 text-left">Purpose</th>
                          <th className="py-2 px-4 border-b border-[#126AF9]/30 text-left">Safeguards</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="py-2 px-4 border-b border-[#126AF9]/30 font-medium">Service Providers</td>
                          <td className="py-2 px-4 border-b border-[#126AF9]/30">
                            Hosting (AWS), analytics (Google Analytics), email (SendGrid), payments (Stripe)
                          </td>
                          <td className="py-2 px-4 border-b border-[#126AF9]/30">
                            Confidentiality clauses; processing instructions
                          </td>
                        </tr>
                        <tr>
                          <td className="py-2 px-4 border-b border-[#126AF9]/30 font-medium">Advertising Partners</td>
                          <td className="py-2 px-4 border-b border-[#126AF9]/30">
                            Ad networks (Meta Ads, Google Ads) for retargeting and attribution
                          </td>
                          <td className="py-2 px-4 border-b border-[#126AF9]/30">
                            Limited to hashed or pseudonymous IDs
                          </td>
                        </tr>
                        <tr>
                          <td className="py-2 px-4 border-b border-[#126AF9]/30 font-medium">Integration Platforms</td>
                          <td className="py-2 px-4 border-b border-[#126AF9]/30">
                            API calls you configure (e.g., Facebook Conversions API, blockchain nodes)
                          </td>
                          <td className="py-2 px-4 border-b border-[#126AF9]/30">As directed by you</td>
                        </tr>
                        <tr>
                          <td className="py-2 px-4 border-b border-[#126AF9]/30 font-medium">Professional Advisors</td>
                          <td className="py-2 px-4 border-b border-[#126AF9]/30">Auditors, lawyers, accountants</td>
                          <td className="py-2 px-4 border-b border-[#126AF9]/30">Duty of confidentiality</td>
                        </tr>
                        <tr>
                          <td className="py-2 px-4 border-b border-[#126AF9]/30 font-medium">Authorities</td>
                          <td className="py-2 px-4 border-b border-[#126AF9]/30">
                            Law enforcement or regulators when legally compelled
                          </td>
                          <td className="py-2 px-4 border-b border-[#126AF9]/30">Verified requests only</td>
                        </tr>
                        <tr>
                          <td className="py-2 px-4 border-[#126AF9]/30 font-medium">Business Successor</td>
                          <td className="py-2 px-4 border-[#126AF9]/30">In case of merger or acquisition</td>
                          <td className="py-2 px-4 border-[#126AF9]/30">Prior notice where feasible</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <p className="mt-4">
                    We do not sell personal information in the sense of exchanging it for money, but CPRA may classify
                    some sharing with ad partners as a "sale/share." See § 11 for opt‑out rights.
                  </p>

                  <h3 className="text-xl font-bold mt-6">7. Cookies, Pixels & Similar Tech</h3>
                  <div className="overflow-x-auto">
                    <table className="min-w-full border border-[#126AF9]/30 rounded-lg">
                      <thead>
                        <tr className="bg-[#126AF9]/10">
                          <th className="py-2 px-4 border-b border-[#126AF9]/30 text-left">Technology</th>
                          <th className="py-2 px-4 border-b border-[#126AF9]/30 text-left">Purpose</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="py-2 px-4 border-b border-[#126AF9]/30 font-medium">
                            Strictly Necessary Cookies
                          </td>
                          <td className="py-2 px-4 border-b border-[#126AF9]/30">Site security, session management</td>
                        </tr>
                        <tr>
                          <td className="py-2 px-4 border-b border-[#126AF9]/30 font-medium">Analytics Cookies</td>
                          <td className="py-2 px-4 border-b border-[#126AF9]/30">Traffic metrics, feature usage</td>
                        </tr>
                        <tr>
                          <td className="py-2 px-4 border-b border-[#126AF9]/30 font-medium">
                            Advertising Cookies / Pixels
                          </td>
                          <td className="py-2 px-4 border-b border-[#126AF9]/30">
                            Measure conversions, build remarketing audiences (e.g., Meta Pixel, Google Tag)
                          </td>
                        </tr>
                        <tr>
                          <td className="py-2 px-4 border-b border-[#126AF9]/30 font-medium">Server‑Side Events</td>
                          <td className="py-2 px-4 border-b border-[#126AF9]/30">
                            Facebook Conversions API for more reliable ad attribution
                          </td>
                        </tr>
                        <tr>
                          <td className="py-2 px-4 border-[#126AF9]/30 font-medium">SDKs</td>
                          <td className="py-2 px-4 border-[#126AF9]/30">
                            Push notifications, crash reporting in mobile apps
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <p className="mt-4">
                    You can control cookies via browser settings or the cookie banner. Disabling some cookies may impact
                    functionality.
                  </p>

                  <h3 className="text-xl font-bold mt-6">8. Facebook / Meta Integrations</h3>
                  <p>
                    Our use of the Meta Pixel and Conversions API complies with the Meta Business Tools Terms. Data may
                    include hashed identifiers (e‑mail/phone), event timestamps, and custom parameters (e.g., purchase
                    value). Meta processes this data to (i) match events to Meta accounts, (ii) measure ad performance,
                    and (iii) optimize targeting. You can review and modify your ad preferences on Meta platforms.
                  </p>

                  <h3 className="text-xl font-bold mt-6">9. Data Retention</h3>
                  <p>
                    We retain personal information only for as long as necessary to fulfill the purposes outlined in
                    this Policy, comply with legal obligations, resolve disputes, and enforce agreements. Typical
                    retention periods:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Marketing leads – 24 months from last engagement</li>
                    <li>Contractual records – 7 years (tax & audit)</li>
                    <li>Project artifacts – per Master Services Agreement or Customer Data Deletion Request (§ 12)</li>
                  </ul>

                  <h3 className="text-xl font-bold mt-6">10. Security</h3>
                  <p>We employ industry‑standard safeguards:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Encryption in transit (TLS 1.2+) and at rest (AES‑256 for critical data)</li>
                    <li>Role‑based access control (RBAC) and MFA for admin tools</li>
                    <li>Regular vulnerability scans and third‑party penetration tests</li>
                    <li>Incident‑response plan aligned with NIST SP 800‑61</li>
                  </ul>
                  <p>
                    No method of transmission or storage is 100% secure; therefore, we cannot guarantee absolute
                    security.
                  </p>

                  <h3 className="text-xl font-bold mt-6">11. Your Choices & State‑Specific Rights</h3>
                  <div className="overflow-x-auto">
                    <table className="min-w-full border border-[#126AF9]/30 rounded-lg">
                      <thead>
                        <tr className="bg-[#126AF9]/10">
                          <th className="py-2 px-4 border-b border-[#126AF9]/30 text-left">Right</th>
                          <th className="py-2 px-4 border-b border-[#126AF9]/30 text-left">California (CPRA)</th>
                          <th className="py-2 px-4 border-b border-[#126AF9]/30 text-left">Other U.S. States*</th>
                          <th className="py-2 px-4 border-b border-[#126AF9]/30 text-left">How to Exercise</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="py-2 px-4 border-b border-[#126AF9]/30 font-medium">Access / Know</td>
                          <td className="py-2 px-4 border-b border-[#126AF9]/30">✓</td>
                          <td className="py-2 px-4 border-b border-[#126AF9]/30">Varies</td>
                          <td className="py-2 px-4 border-b border-[#126AF9]/30">
                            Email gargantua@gargantuatechnologies.com
                          </td>
                        </tr>
                        <tr>
                          <td className="py-2 px-4 border-b border-[#126AF9]/30 font-medium">Delete</td>
                          <td className="py-2 px-4 border-b border-[#126AF9]/30">✓</td>
                          <td className="py-2 px-4 border-b border-[#126AF9]/30">Varies</td>
                          <td className="py-2 px-4 border-b border-[#126AF9]/30">Same as above</td>
                        </tr>
                        <tr>
                          <td className="py-2 px-4 border-b border-[#126AF9]/30 font-medium">Correct</td>
                          <td className="py-2 px-4 border-b border-[#126AF9]/30">✓</td>
                          <td className="py-2 px-4 border-b border-[#126AF9]/30">Varies</td>
                          <td className="py-2 px-4 border-b border-[#126AF9]/30">Same as above</td>
                        </tr>
                        <tr>
                          <td className="py-2 px-4 border-b border-[#126AF9]/30 font-medium">Opt‑Out of Sale/Share</td>
                          <td className="py-2 px-4 border-b border-[#126AF9]/30">✓</td>
                          <td className="py-2 px-4 border-b border-[#126AF9]/30">"Do Not Sell/Share" link or email</td>
                          <td className="py-2 px-4 border-b border-[#126AF9]/30"></td>
                        </tr>
                        <tr>
                          <td className="py-2 px-4 border-[#126AF9]/30 font-medium">Limit Use of Sensitive PI</td>
                          <td className="py-2 px-4 border-[#126AF9]/30">✓</td>
                          <td className="py-2 px-4 border-[#126AF9]/30">—</td>
                          <td className="py-2 px-4 border-[#126AF9]/30">
                            Not applicable (we do not process Sensitive PI)
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <p className="mt-4">
                    *Virginia, Colorado, Connecticut, Utah, Texas laws broadly mirror these rights.
                  </p>
                  <p>
                    We will verify your request (e.g., via email confirmation). Authorized agents may act on your behalf
                    with written permission.
                  </p>

                  <h3 className="text-xl font-bold mt-6">12. Data Deletion Requests (Facebook Requirement)</h3>
                  <p>
                    If you connected your account to Facebook or submitted data through a Facebook ad, you may request
                    deletion by:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>
                      Emailing privacy@gargantua.tech with subject "Facebook Data Deletion Request", including your full
                      name and the email/phone used in the form.
                    </li>
                  </ul>
                  <p>
                    We will (i) locate associated records, (ii) anonymize or erase them within 30 days, and (iii)
                    confirm completion.
                  </p>

                  <h3 className="text-xl font-bold mt-6">13. Children's Privacy</h3>
                  <p>
                    The Services are not directed to children under 13. We do not knowingly collect personal information
                    from children. If we learn that we have inadvertently obtained data from a child under 13, we will
                    delete it as required by the Children's Online Privacy Protection Act (COPPA).
                  </p>

                  <h3 className="text-xl font-bold mt-6">14. International Data Transfers</h3>
                  <p>
                    We are headquartered in the United States. If you access the Services from outside the U.S., your
                    information will be transferred to and processed in the U.S. or other countries with different
                    data‑protection laws than yours. Where required, we rely on standard contractual clauses (SCCs) or
                    other approved mechanisms to legitimize cross‑border transfers.
                  </p>

                  <h3 className="text-xl font-bold mt-6">15. "Do Not Track" Signals</h3>
                  <p>
                    Our Services do not currently respond to browser "Do Not Track" signals because there is no
                    consistent industry standard.
                  </p>

                  <h3 className="text-xl font-bold mt-6">16. Changes to This Policy</h3>
                  <p>
                    We may update this Policy periodically. Material changes will be highlighted on our website or sent
                    via email. The "Last updated" date reflects the effective date of the latest version. Continued use
                    of the Services after changes signifies acceptance.
                  </p>

                  <h3 className="text-xl font-bold mt-6">17. Contact Us</h3>
                  <p>
                    Ligiga LLC
                    <br />3 PARKLANE BLVD SUITE 1005W, DEARBORN, MI 48126, USA
                    <br />
                    Email: gargantua@gargantuatechnologies.com
                    <br />
                    Phone: +1 407‑680‑7191
                  </p>

                  <p className="mt-8 font-semibold">
                    By using our Services, you acknowledge that you have read and understood this Privacy Policy and
                    agree to its terms.
                  </p>
                </>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
