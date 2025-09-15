"use client"

import { motion } from "framer-motion"

interface TermsContentProps {
  currentLang: "pt" | "en"
}

export function TermsContent({ currentLang }: TermsContentProps) {

  return (
    <section className="pt-32 pb-16 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="font-heading text-4xl md:text-6xl mb-6 text-center">
            <span className="text-gradient">{currentLang === "pt" ? "Termos de Serviço" : "Terms of Service"}</span>
          </h1>

          <div className="mt-12 glass-effect rounded-xl p-8 md:p-12 relative overflow-hidden">
            {/* Background effect */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-purple-600/10 rounded-full blur-3xl -z-10"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-indigo-600/10 rounded-full blur-3xl -z-10"></div>

            <div className="prose prose-invert max-w-none">
              {currentLang === "pt" ? (
                <>
                  <h3 className="text-xl font-bold mt-6">1. Introdução</h3>
                  <p>
                    Bem‑vindo ao site da Gargantua Technologies ("Gargantua", "nós" ou "nosso"). Estes Termos de
                    Serviço ("Termos") regem o acesso e o uso de todos os produtos, serviços, aplicações web, APIs,
                    conteúdos e recursos disponibilizados pela Gargantua (coletivamente, "Serviços"). Ao acessar ou
                    utilizar qualquer Serviço, você ("Usuário") declara ter lido, compreendido e concordado em ficar
                    vinculado a estes Termos e à nossa Política de Privacidade.
                  </p>

                  <h3 className="text-xl font-bold mt-6">2. Definições Principais</h3>
                  <div className="overflow-x-auto">
                    <table className="min-w-full border border-purple-500/30 rounded-lg">
                      <thead>
                        <tr className="bg-[#126AF9]/20">
                          <th className="py-2 px-4 border-b border-purple-500/30 text-left">Termo</th>
                          <th className="py-2 px-4 border-b border-purple-500/30 text-left">Significado resumido</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="py-2 px-4 border-b border-purple-500/30 font-medium">Serviços</td>
                          <td className="py-2 px-4 border-b border-purple-500/30">
                            Softwares sob medida, sites, apps, integrações com IA & Web3, gateways de pagamento,
                            material de marketing e quaisquer assets digitais fornecidos pela Gargantua.
                          </td>
                        </tr>
                        <tr>
                          <td className="py-2 px-4 border-b border-purple-500/30 font-medium">Conteúdo do Usuário</td>
                          <td className="py-2 px-4 border-b border-purple-500/30">
                            Dados, textos, imagens, código‑fonte, feedback ou qualquer outro material enviado ou
                            integrado pelo Usuário aos nossos Serviços.
                          </td>
                        </tr>
                        <tr>
                          <td className="py-2 px-4 font-medium">Plataformas de Terceiros</td>
                          <td className="py-2 px-4">
                            Serviços externos (ex.: Facebook, Google, AWS, blockchains públicas) integrados ou
                            utilizados pelos nossos Sistemas.
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <h3 className="text-xl font-bold mt-6">3. Aceitação dos Termos</h3>
                  <p>
                    A utilização dos Serviços implica plena concordância com estes Termos. Caso discorde de qualquer
                    cláusula, não utilize os Serviços.
                  </p>

                  <h3 className="text-xl font-bold mt-6">4. Serviços Prestados</h3>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>
                      <strong>Desenvolvimento Sob Medida:</strong> criação, manutenção e hospedagem de software web &
                      mobile.
                    </li>
                    <li>
                      <strong>Soluções de IA:</strong> chatbots, automações, modelos preditivos e consultoria.
                    </li>
                    <li>
                      <strong>Infraestrutura Web3:</strong> smart contracts, dApps e integrações blockchain.
                    </li>
                    <li>
                      <strong>Pagamentos Online:</strong> front‑ends de checkout e consultoria em
                      sub‑adquirência/gateways.
                    </li>
                    <li>
                      <strong>Marketing Digital:</strong> design de criativos, landings e campanhas de performance.
                    </li>
                  </ul>
                  <p>
                    Nos reservamos o direito de modificar, suspender ou descontinuar qualquer Serviço a qualquer
                    momento, comunicando o Usuário com antecedência razoável quando exigido por lei.
                  </p>

                  <h3 className="text-xl font-bold mt-6">5. Elegibilidade</h3>
                  <p>
                    Os Serviços destinam‑se a maiores de 18 anos ou menores devidamente representados. Ao usar os
                    Serviços, o Usuário declara possuir capacidade civil e todas as autorizações internas/legais
                    necessárias para firmar contratos em nome de sua organização.
                  </p>

                  <h3 className="text-xl font-bold mt-6">6. Obrigações do Usuário</h3>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Fornecer informações verdadeiras, atuais e completas.</li>
                    <li>Manter seguras credenciais de acesso e chaves de API.</li>
                    <li>
                      Respeitar todas as leis aplicáveis (LGPD, GDPR, DMCA, OFAC, políticas de plataformas de anúncios,
                      etc.).
                    </li>
                    <li>
                      Não utilizar os Serviços para atividades ilícitas, fraude, spam, engenharia reversa ou violação de
                      propriedade intelectual.
                    </li>
                    <li>
                      Obter consentimento adequado antes de repassar dados pessoais de terceiros à Gargantua ou
                      conectá‑los a serviços externos (ex.: Facebook Conversions API).
                    </li>
                  </ul>

                  <h3 className="text-xl font-bold mt-6">7. Propriedade Intelectual</h3>
                  <p>
                    Todos os direitos sobre marcas, layouts, logotipos, bases de dados, códigos e documentação pertencem
                    à Gargantua ou a seus licenciantes, exceto quando expressamente indicado em contrato de cessão ou
                    licenciamento. Nada nestes Termos transfere ao Usuário qualquer direito de propriedade intelectual
                    além do uso limitado, revogável e não exclusivo necessário para fruir os Serviços conforme
                    contratado.
                  </p>

                  <h3 className="text-xl font-bold mt-6">8. Isenções de Garantia e Limitação de Responsabilidade</h3>
                  <p>
                    <strong>"NO CODE, NO CRY"</strong> – Prestamos nossos Serviços "como estão" ("as is"), sem garantias
                    de adequação a um propósito específico.
                  </p>
                  <p>A Gargantua não se responsabiliza por:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>
                      interrupções ou falhas causadas por provedores de terceiros, redes blockchain, gateways de
                      pagamento ou plataformas sociais;
                    </li>
                    <li>perdas indiretas, lucros cessantes, danos morais, danos à reputação ou perda de dados.</li>
                  </ul>
                  <p>
                    A responsabilidade total da Gargantua, em qualquer hipótese, limita‑se ao valor efetivamente pago
                    pelo Usuário nos 12 meses anteriores ao evento que gerou a responsabilização.
                  </p>

                  <h3 className="text-xl font-bold mt-6">9. Links e Integrações de Terceiros</h3>
                  <p>
                    Os Serviços podem conter links ou integrações a Plataformas de Terceiros (ex.: APIs do Facebook). A
                    Gargantua não controla nem endossa esses serviços e não se responsabiliza por conteúdo, políticas ou
                    práticas de terceiros. O Usuário utiliza tais integrações por sua conta e risco.
                  </p>

                  <h3 className="text-xl font-bold mt-6">10. Privacidade e Proteção de Dados</h3>
                  <p>
                    O tratamento de dados pessoais está detalhado em nossa Política de Privacidade, parte integrante
                    destes Termos. Ao usar os Serviços, o Usuário concorda com as práticas descritas ali, inclusive com
                    eventuais transferências internacionais de dados para fins de hospedagem, suporte ou backup.
                  </p>

                  <h3 className="text-xl font-bold mt-6">11. Modificações nos Termos</h3>
                  <p>
                    Podemos atualizar estes Termos periodicamente. Mudanças materiais serão comunicadas por e‑mail ou
                    aviso em destaque no site, entrando em vigor:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>imediatamente, para novos Usuários;</li>
                    <li>30 dias após o aviso, para Usuários existentes.</li>
                  </ul>
                  <p>O uso contínuo dos Serviços após esse prazo constitui aceitação das alterações.</p>

                  <h3 className="text-xl font-bold mt-6">12. Rescisão</h3>
                  <p>
                    O Usuário pode encerrar sua conta a qualquer momento. A Gargantua pode suspender ou rescindir o
                    acesso em caso de violação destes Termos, atividade fraudulenta ou determinação legal. Obrigações
                    que, por sua natureza, subsistam à rescisão (como confidencialidade, propriedade intelectual e
                    limitações de responsabilidade) permanecerão vigentes.
                  </p>

                  <h3 className="text-xl font-bold mt-6">13. Disposições Gerais</h3>
                  <p>
                    <strong>Independência das Cláusulas</strong> – A invalidade de qualquer disposição não afetará as
                    demais.
                  </p>
                  <p>
                    <strong>Cessão</strong> – O Usuário não pode ceder direitos ou obrigações sem consentimento prévio
                    por escrito da Gargantua.
                  </p>
                  <p>
                    <strong>Comunicações</strong> – Preferencialmente por escrito via e‑mail para gargantua@gargantuatechnologies.com
                  </p>

                  <h3 className="text-xl font-bold mt-6">14. Lei Aplicável e Foro</h3>
                  <p>
                    Estes Termos serão regidos pelas leis da República Federativa do Brasil. Fica eleito o Foro da
                    Comarca de Itajaí/SC ou outro local definido em contrato específico, renunciando‑se a qualquer
                    outro, por mais privilegiado que seja.
                  </p>

                  <h3 className="text-xl font-bold mt-6">15. Contato</h3>
                  <p>
                    Dúvidas sobre estes Termos? Fale conosco:
                    <br />
                    <br />
                    gargantua@gargantuatechnologies.com
                    <br />
                    +55 (92) 98165-9541
                  </p>
                </>
              ) : (
                <>
                  <h2 className="text-2xl font-bold text-center">Terms of Service – U.S. Version</h2>
                  <p className="text-center text-muted-foreground">Last updated: April 18, 2025</p>

                  <h3 className="text-xl font-bold mt-8">1. Introduction</h3>
                  <p>
                    Welcome to Ligiga LLC ("Gargantua," "we," "our," or "us"). These Terms of Service
                    ("Terms") constitute a legally binding agreement between Gargantua and you ("User" or "you")
                    governing your access to and use of all web and mobile applications, APIs, software, content, and
                    other services we make available (collectively, the "Services"). By accessing or using any part of
                    the Services, you agree to be bound by these Terms and by our Privacy Policy, which is incorporated
                    herein by reference. If you do not agree, you must not access or use the Services.
                  </p>

                  <h3 className="text-xl font-bold mt-6">2. Eligibility</h3>
                  <p>
                    You must be at least 13 years old (or older if required by the laws of your jurisdiction) to use the
                    Services. By using the Services, you represent that you (i) meet the minimum age requirement, (ii)
                    have full power and authority to enter into these Terms, and (iii) will comply with all applicable
                    laws and regulations, including U.S. export‑control and sanctions laws.
                  </p>

                  <h3 className="text-xl font-bold mt-6">3. Services</h3>
                  <p>We provide, among other things:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>
                      <strong>Custom Software Development</strong> – web, mobile, and API solutions.
                    </li>
                    <li>
                      <strong>AI & Automation</strong> – chatbots, predictive models, and workflow automations.
                    </li>
                    <li>
                      <strong>Web3 Integrations</strong> – smart‑contract development and blockchain consulting.
                    </li>
                    <li>
                      <strong>Payments Front‑Ends</strong> – checkouts and gateway integrations.
                    </li>
                    <li>
                      <strong>Creative & Marketing Assets</strong> – static and motion design, landing pages, and ad
                      creatives.
                    </li>
                  </ul>
                  <p>
                    We reserve the right to modify, suspend, or discontinue any Service (or feature thereof) at any
                    time, with reasonable notice where required by law.
                  </p>

                  <h3 className="text-xl font-bold mt-6">4. User Obligations</h3>
                  <p>You agree to:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Provide accurate, current, and complete information when requested.</li>
                    <li>Maintain the confidentiality of any login credentials, API keys, or tokens.</li>
                    <li>Use the Services only for lawful purposes and in accordance with these Terms.</li>
                  </ul>

                  <p className="mt-4">Refrain from:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>
                      Violating any applicable federal, state, or local laws (including the Computer Fraud and Abuse
                      Act, CAN‑SPAM Act, COPPA, CCPA/CPRA, and export‑control regulations).
                    </li>
                    <li>Uploading or transmitting viruses, malicious code, or infringing content.</li>
                    <li>
                      Reverse‑engineering, decompiling, or attempting to access source code except as expressly
                      permitted.
                    </li>
                    <li>Circumventing or interfering with security or access‑control measures.</li>
                  </ul>

                  <h3 className="text-xl font-bold mt-6">5. User Content</h3>
                  <h4 className="text-lg font-semibold mt-4">5.1 Ownership</h4>
                  <p>
                    You retain all rights to any data, code, text, images, or other material you submit to the Services
                    ("User Content"). By posting User Content, you grant Gargantua a worldwide, non‑exclusive,
                    royalty‑free license to host, copy, transmit, display, and process that content solely for the
                    purpose of providing and improving the Services.
                  </p>

                  <h4 className="text-lg font-semibold mt-4">5.2 Representations</h4>
                  <p>
                    You represent and warrant that you have all rights necessary to grant the above license and that
                    your User Content does not infringe or violate any third‑party rights, including
                    intellectual‑property, privacy, or publicity rights.
                  </p>

                  <h3 className="text-xl font-bold mt-6">6. Intellectual Property</h3>
                  <p>
                    Except for User Content, all software, designs, graphics, compilations, trademarks, and
                    documentation are the property of Gargantua or its licensors and are protected by U.S. and
                    international copyrights, trademarks, and other laws. No rights or licenses are granted except as
                    expressly set forth in these Terms. Any unauthorized use may violate applicable laws and result in
                    civil or criminal penalties.
                  </p>

                  <h3 className="text-xl font-bold mt-6">7. DMCA Notice & Takedown</h3>
                  <p>
                    We respect intellectual‑property rights and comply with the Digital Millennium Copyright Act
                    ("DMCA"). If you believe that material on our Service infringes your copyright, please send a
                    written notice to our designated DMCA agent at gargantua@gargantuatechnologies.com with the information required by
                    17 U.S.C. § 512(c)(3). We will respond in accordance with the DMCA.
                  </p>

                  <h3 className="text-xl font-bold mt-6">8. Third‑Party Services & Integrations</h3>
                  <p>
                    The Services may integrate with or link to third‑party platforms (e.g., Facebook, Google, AWS).
                    Gargantua does not control those services and is not responsible for their content or practices. Use
                    of third‑party platforms is subject to their own terms and policies, and you assume all risk arising
                    from such use.
                  </p>

                  <h3 className="text-xl font-bold mt-6">9. Disclaimers</h3>
                  <p>
                    <strong>Warranty Disclaimer.</strong> THE SERVICES ARE PROVIDED "AS IS" AND "AS AVAILABLE," WITHOUT
                    WARRANTIES OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS
                    FOR A PARTICULAR PURPOSE, TITLE, AND NON‑INFRINGEMENT.
                  </p>
                  <p>
                    <strong>Availability.</strong> We do not guarantee that the Services will be uninterrupted, secure,
                    or error‑free, or that data loss will not occur.
                  </p>
                  <p>
                    <strong>Third‑Party Content.</strong> We make no representations regarding, and assume no liability
                    for, any third‑party content or services.
                  </p>

                  <h3 className="text-xl font-bold mt-6">10. Limitation of Liability</h3>
                  <p>
                    TO THE FULLEST EXTENT PERMITTED BY LAW, GARGANTUA AND ITS OFFICERS, DIRECTORS, EMPLOYEES, AGENTS,
                    AND AFFILIATES WILL NOT BE LIABLE FOR (i) INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, EXEMPLARY,
                    OR PUNITIVE DAMAGES; (ii) LOST PROFITS, LOST REVENUE, LOST DATA, OR BUSINESS INTERRUPTION; OR (iii)
                    AGGREGATE LIABILITY EXCEEDING THE GREATER OF ONE HUNDRED U.S. DOLLARS (US $100) OR THE TOTAL FEES
                    PAID BY YOU TO GARGANTUA FOR THE SERVICES IN THE TWELVE (12) MONTHS PRECEDING THE CLAIM. THESE
                    LIMITATIONS APPLY REGARDLESS OF THE THEORY OF LIABILITY AND EVEN IF A REMEDY FAILS OF ITS ESSENTIAL
                    PURPOSE.
                  </p>
                  <p>
                    Some jurisdictions do not allow the exclusion or limitation of certain damages; in such
                    jurisdictions, our liability is limited to the maximum extent permitted by law.
                  </p>

                  <h3 className="text-xl font-bold mt-6">11. Indemnification</h3>
                  <p>
                    You agree to defend, indemnify, and hold harmless Gargantua and its affiliates from any claims,
                    damages, liabilities, and expenses (including reasonable attorneys' fees) arising out of or relating
                    to: (i) your use of the Services; (ii) your User Content; (iii) your violation of these Terms; or
                    (iv) your violation of any rights of another party.
                  </p>

                  <h3 className="text-xl font-bold mt-6">12. Modifications to Terms</h3>
                  <p>
                    We may revise these Terms from time to time. If we make material changes, we will post the updated
                    Terms on our site and indicate the new "Last updated" date. Continued use of the Services after the
                    effective date of any changes constitutes acceptance of those changes.
                  </p>

                  <h3 className="text-xl font-bold mt-6">13. Termination</h3>
                  <p>
                    Either party may terminate these Terms at any time for any reason upon notice to the other party.
                    Upon termination, your right to use the Services ceases immediately, but Sections 5–15 will survive.
                  </p>

                  <h3 className="text-xl font-bold mt-6">14. Governing Law; Dispute Resolution</h3>
                  <p>
                    <strong>Governing Law.</strong> These Terms are governed by and construed in accordance with the
                    laws of the State of Delaware, without regard to its conflict‑of‑laws principles.
                  </p>
                  <p>
                    <strong>Binding Arbitration & Class Action Waiver.</strong> Any dispute arising out of or relating
                    to these Terms or the Services will be resolved exclusively by final and binding arbitration
                    administered by JAMS under its Comprehensive Arbitration Rules in Wilmington, Delaware, unless you
                    opt out within 30 days of first accepting these Terms by sending written notice to
                    gargantua@gargantuatechnologies.com YOU AND GARGANTUA WAIVE ANY RIGHT TO PARTICIPATE IN A CLASS‑ACTION LAWSUIT OR
                    CLASS‑WIDE ARBITRATION.
                  </p>
                  <p>
                    <strong>Equitable Relief.</strong> Notwithstanding the foregoing, either party may seek injunctive
                    or other equitable relief in a court of competent jurisdiction for alleged infringement of
                    intellectual‑property or misuse of confidential information.
                  </p>

                  <h3 className="text-xl font-bold mt-6">15. Miscellaneous</h3>
                  <p>
                    <strong>Entire Agreement.</strong> These Terms and any policies referenced herein constitute the
                    entire agreement between you and Gargantua regarding the Services.
                  </p>
                  <p>
                    <strong>Severability.</strong> If any provision is held invalid, the remaining provisions will
                    remain in full force.
                  </p>
                  <p>
                    <strong>Assignment.</strong> You may not assign or transfer these Terms without our prior written
                    consent; we may assign them without restriction.
                  </p>
                  <p>
                    <strong>No Waiver.</strong> Our failure to enforce any right or provision is not a waiver of future
                    enforcement.
                  </p>

                  <h3 className="text-xl font-bold mt-6">16. Contact Information</h3>
                  <p>
                    Ligiga LLC
                    <br />3 PARKLANE BLVD SUITE 1005W, DEARBORN, MI 48126, USA
                    <br />
                    E‑mail: gargantua@gargantuatechnologies.com
                    <br />
                    Phone: +1 407‑680‑7191
                  </p>

                  <p className="mt-8 font-semibold">
                    By accessing or using the Services, you acknowledge that you have read, understood, and agree to be
                    bound by these Terms.
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
