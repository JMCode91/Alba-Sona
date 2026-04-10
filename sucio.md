<div class="formulario-contenedor">
                <div class="formulario-textos">
                    <h2>¿Listo para tu transformación?</h2>
                    <p>Cuéntame los detalles de tu evento y me pondré en contacto contigo en menos de 24h.</p>
                </div>

                <form id="form-contacto" method="POST" class="form-grid">
                    <input type="hidden" name="access_key" value={"4e9aadba-78eb-4bfb-b96a-9753cde072e8"} />
                    <input type="hidden" name="subject" value="Nueva solicitud desde AlbaSona.com" />
                    <input type="checkbox" name="botcheck" class="hidden" style="display: none;" />

                    <div class="campo">
                        <label for="name">Nombre completo</label>
                        <input type="text" name="name" id="name" required placeholder="Tu nombre" />
                    </div>

                    <div class="campo">
                        <label for="email">Correo electrónico</label>
                        <input type="email" name="email" id="email" required placeholder="email@ejemplo.com" />
                    </div>

                    <div class="campo md-span-2">
                        <label for="message">Cuéntame sobre tu evento (fecha, tipo de maquillaje, etc.)</label>
                        <textarea name="message" id="message" rows="5" required placeholder="¿Cómo puedo ayudarte?"></textarea>
                    </div>

                    <div class="campo-check md-span-2">
                        <input type="checkbox" id="privacy" required />
                        <label for="privacy">Acepto la <a href="/politica-privacidad">política de privacidad</a></label>
                    </div>

                    <div class="md-span-2 centro">
                        <button type="submit" id="submit-btn" class="btn-principal">
                            Enviar Mensaje
                        </button>
                        <div id="result" class="mensaje-resultado"></div>
                    </div>
                </form>
            </div>




            <div class="contacto-metodos">
                    <h2>Sígueme y Contáctame</h2>
                    
                    <div class="contacto-grid-tarjetas">
                        <div class="contacto-card">
                            <div class="icono-wrapper">
                                <Image src={iconInstaPink} alt="Instagram" class="icon-default" />
                                <Image src={iconInstaColor} alt="Instagram" class="icon-hover" />
                            </div>
                            <h3>Instagram</h3>
                            <p>@albasonamakeup</p>
                            <a href="https://www.instagram.com/albasonamakeup" target="_blank" class="btn-principal">Seguir</a>
                        </div>

                        <div class="contacto-card">
                            <div class="icono-wrapper">
                                <Image src={iconFbPink} alt="Facebook" class="icon-default" />
                                <Image src={iconFbColor} alt="Facebook" class="icon-hover" />
                            </div>
                            <h3>Facebook</h3>
                            <p>Alba Sona Makeup</p>
                            <a href="https://www.facebook.com/albasonamakeup" target="_blank" class="btn-principal">Seguir</a>
                        </div>

                        <div class="contacto-card">
                            <div class="icono-wrapper">
                                <Image src={iconWaPink} alt="WhatsApp" class="icon-default" />
                                <Image src={iconWaColor} alt="WhatsApp" class="icon-hover" />
                            </div>
                            <h3>WhatsApp</h3>
                            <p>+34 612 345 678</p>
                            <a href="https://wa.me/34612345678" target="_blank" class="btn-principal">Escribir</a>
                        </div>
                    </div>

                    <div class="nota-contacto">
                        <p>✨ Respondo todos los mensajes en un máximo de 24 horas. Para citas urgentes, prefiero contactar por WhatsApp.</p>
                    </div>
                </div>