<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Event Request - 30 People - Villa Thaifa</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            padding: 20px;
            line-height: 1.6;
        }

        .container {
            max-width: 1200px;
            margin: 0 auto;
            background: white;
            border-radius: 15px;
            box-shadow: 0 20px 60px rgba(0,0,0,0.3);
            overflow: hidden;
        }

        .header {
            background: linear-gradient(135deg, #ff6b6b 0%, #ee5a24 100%);
            color: white;
            padding: 30px;
            text-align: center;
        }

        .header h1 {
            font-size: 2.5em;
            margin-bottom: 10px;
        }

        .header .date {
            font-size: 1.2em;
            opacity: 0.9;
        }

        .badge {
            display: inline-block;
            background: rgba(255,255,255,0.2);
            padding: 8px 15px;
            border-radius: 20px;
            margin: 10px 5px 0 5px;
            font-size: 0.9em;
        }

        .content {
            padding: 40px;
        }

        .section {
            margin-bottom: 40px;
        }

        .section-title {
            font-size: 1.8em;
            color: #2c3e50;
            margin-bottom: 20px;
            padding-bottom: 10px;
            border-bottom: 3px solid #667eea;
            display: flex;
            align-items: center;
        }

        .section-title .icon {
            font-size: 1.2em;
            margin-right: 15px;
        }

        .alert {
            padding: 20px;
            border-radius: 10px;
            margin-bottom: 20px;
            border-left: 5px solid;
        }

        .alert-info {
            background: #e8f4f8;
            border-color: #3498db;
            color: #2c3e50;
        }

        .alert-warning {
            background: #fff9e6;
            border-color: #f39c12;
            color: #2c3e50;
        }

        .alert-success {
            background: #e8f8f5;
            border-color: #27ae60;
            color: #2c3e50;
        }

        .alert-danger {
            background: #fce8e8;
            border-color: #e74c3c;
            color: #2c3e50;
        }

        .client-message {
            background: #f8f9fa;
            border-left: 5px solid #667eea;
            padding: 20px;
            border-radius: 10px;
            font-size: 1.1em;
            margin-bottom: 20px;
        }

        .client-message strong {
            color: #667eea;
        }

        table {
            width: 100%;
            border-collapse: collapse;
            margin: 20px 0;
        }

        table th {
            background: #667eea;
            color: white;
            padding: 15px;
            text-align: left;
            font-weight: 600;
        }

        table td {
            padding: 15px;
            border-bottom: 1px solid #e0e0e0;
        }

        table tr:hover {
            background: #f8f9fa;
        }

        .capacity-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 20px;
            margin: 20px 0;
        }

        .capacity-card {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            padding: 25px;
            border-radius: 10px;
            text-align: center;
        }

        .capacity-card .number {
            font-size: 3em;
            font-weight: bold;
            margin-bottom: 10px;
        }

        .capacity-card .label {
            font-size: 1.1em;
            opacity: 0.9;
        }

        .form-section {
            background: #f8f9fa;
            padding: 30px;
            border-radius: 10px;
            margin-top: 30px;
        }

        .form-group {
            margin-bottom: 25px;
        }

        .form-group label {
            display: block;
            font-weight: 600;
            margin-bottom: 10px;
            color: #2c3e50;
            font-size: 1.1em;
        }

        .form-group input[type="text"],
        .form-group input[type="number"],
        .form-group input[type="date"],
        .form-group textarea,
        .form-group select {
            width: 100%;
            padding: 12px 15px;
            border: 2px solid #e0e0e0;
            border-radius: 8px;
            font-size: 1em;
            transition: border-color 0.3s;
        }

        .form-group input:focus,
        .form-group textarea:focus,
        .form-group select:focus {
            outline: none;
            border-color: #667eea;
        }

        .form-group textarea {
            min-height: 100px;
            resize: vertical;
        }

        .radio-group {
            display: flex;
            gap: 20px;
            flex-wrap: wrap;
        }

        .radio-option {
            display: flex;
            align-items: center;
            gap: 8px;
        }

        .radio-option input[type="radio"] {
            width: 20px;
            height: 20px;
            cursor: pointer;
        }

        .checkbox-group {
            display: flex;
            flex-direction: column;
            gap: 10px;
        }

        .checkbox-option {
            display: flex;
            align-items: center;
            gap: 10px;
        }

        .checkbox-option input[type="checkbox"] {
            width: 20px;
            height: 20px;
            cursor: pointer;
        }

        .btn-container {
            display: flex;
            gap: 15px;
            margin-top: 30px;
            flex-wrap: wrap;
        }

        .btn {
            padding: 15px 30px;
            border: none;
            border-radius: 8px;
            font-size: 1.1em;
            font-weight: 600;
            cursor: pointer;
            transition: all 0.3s;
            display: flex;
            align-items: center;
            gap: 10px;
        }

        .btn-primary {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            flex: 1;
        }

        .btn-primary:hover {
            transform: translateY(-2px);
            box-shadow: 0 10px 25px rgba(102, 126, 234, 0.4);
        }

        .btn-secondary {
            background: #95a5a6;
            color: white;
        }

        .btn-secondary:hover {
            background: #7f8c8d;
        }

        .btn-success {
            background: #27ae60;
            color: white;
        }

        .btn-success:hover {
            background: #229954;
        }

        .footer {
            background: #2c3e50;
            color: white;
            padding: 20px;
            text-align: center;
        }

        .highlight {
            background: #fff3cd;
            padding: 2px 6px;
            border-radius: 3px;
            font-weight: 600;
        }

        .price-box {
            background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
            color: white;
            padding: 25px;
            border-radius: 10px;
            margin: 20px 0;
        }

        .price-box .price {
            font-size: 2.5em;
            font-weight: bold;
            margin-bottom: 10px;
        }

        .price-box .details {
            font-size: 1.1em;
            opacity: 0.9;
        }

        @media print {
            body {
                background: white;
                padding: 0;
            }

            .container {
                box-shadow: none;
            }

            .btn-container,
            .form-section {
                display: none;
            }
        }

        @media (max-width: 768px) {
            .header h1 {
                font-size: 1.8em;
            }

            .content {
                padding: 20px;
            }

            .capacity-grid {
                grid-template-columns: 1fr;
            }

            .btn-container {
                flex-direction: column;
            }

            .btn {
                width: 100%;
            }
        }
    </style>
</head>
<body>
    <div class="container">
        <!-- HEADER -->
        <div class="header">
            <h1>🎂 Event Request - Birthday</h1>
            <div class="date">📅 Received January 28, 2026 - 8:16 PM</div>
            <div>
                <span class="badge">30 People</span>
                <span class="badge">May 14-17, 2026</span>
                <span class="badge">3 Nights</span>
            </div>
        </div>

        <!-- CONTENT -->
        <div class="content">

            <!-- SECTION 1: CLIENT MESSAGE -->
            <section class="section">
                <h2 class="section-title">
                    <span class="icon">💬</span>
                    Client Message
                </h2>

                <div class="client-message">
                    <p><strong>[20:16]</strong> We would like to organize a birthday party in Marrakech</p>
                    <p><strong>[20:16]</strong> Looking for villas to accommodate 20 adults and 10 children</p>
                    <p><strong>[20:16]</strong> From May 14 to 17</p>
                    <p><strong>[20:16]</strong> Do you have availability and villas to offer for this occasion</p>
                </div>

                <div class="alert alert-warning">
                    <strong>⚠️ ATTENTION:</strong> The client asks for "villas" (plural). They might think that Villa Thaifa has several buildings or are looking for several separate properties.<br><br>
                    <strong>Villa Thaifa = A SINGLE property with 12 rooms.</strong>
                </div>
            </section>

            <!-- SECTION 2: CAPACITY ANALYSIS -->
            <section class="section">
                <h2 class="section-title">
                    <span class="icon">🏨</span>
                    Villa Thaifa Capacity Analysis
                </h2>

                <div class="capacity-grid">
                    <div class="capacity-card">
                        <div class="number">30</div>
                        <div class="label">Requested People<br>(20 adults + 10 children)</div>
                    </div>
                    <div class="capacity-card">
                        <div class="number">37</div>
                        <div class="label">Maximum Capacity<br>(12 rooms)</div>
                    </div>
                    <div class="capacity-card">
                        <div class="number">✅</div>
                        <div class="label">Technically FEASIBLE</div>
                    </div>
                </div>

                <table>
                    <thead>
                        <tr>
                            <th>Room</th>
                            <th>Type</th>
                            <th>Capacity</th>
                            <th>Configuration</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>01, 03, 08</td>
                            <td>Deluxe Triple</td>
                            <td>3 × 3 = 9</td>
                            <td>1 King Bed + 1 Sofa Bed</td>
                        </tr>
                        <tr>
                            <td>02</td>
                            <td>Deluxe Double</td>
                            <td>2</td>
                            <td>1 King Bed</td>
                        </tr>
                        <tr>
                            <td>04, 05</td>
                            <td>Double Superior</td>
                            <td>2 × 2 = 4</td>
                            <td>1 King Bed</td>
                        </tr>
                        <tr>
                            <td>06</td>
                            <td>Executive Suite</td>
                            <td>3</td>
                            <td>1 King Bed + 1 Sofa Bed</td>
                        </tr>
                        <tr>
                            <td>07</td>
                            <td>Deluxe King Suite</td>
                            <td>4</td>
                            <td>1 King Bed + 2 Sofa Beds</td>
                        </tr>
                        <tr>
                            <td>09, 11</td>
                            <td>Family Suite</td>
                            <td>4 × 2 = 8</td>
                            <td>1 King Bed + 2 Sofa Beds</td>
                        </tr>
                        <tr>
                            <td>10</td>
                            <td>Suite</td>
                            <td>3</td>
                            <td>1 King Bed + 1 Sofa Bed</td>
                        </tr>
                        <tr>
                            <td>12</td>
                            <td>Presidential Suite</td>
                            <td>4</td>
                            <td>1 King Bed + 2 Sofa Beds</td>
                        </tr>
                        <tr style="background: #e8f4f8; font-weight: bold;">
                            <td colspan="2">TOTAL</td>
                            <td>37 adults max</td>
                            <td>12 rooms</td>
                        </tr>
                    </tbody>
                </table>
            </section>

            <!-- SECTION 3: PRICING PROPOSAL -->
            <section class="section">
                <h2 class="section-title">
                    <span class="icon">💰</span>
                    Pricing Proposal
                </h2>

                <div class="price-box">
                    <div class="price">€ 6,000 (Base)</div>
                    <div class="details">
                        Full privatization: 3 nights × € 2,000/night<br>
                        Excluding services • Excluding spa/hammam
                    </div>
                </div>

                <div class="alert alert-info">
                    <strong>📋 Additional services to discuss:</strong><br><br>

                    <table style="margin-top: 15px;">
                        <thead>
                            <tr>
                                <th>Service</th>
                                <th>Estimated Rate</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Breakfast (30 pax × 3 days)</td>
                                <td>~€ 1,170<br><small>(€ 13/pax estimated)</small></td>
                                <td><span class="highlight">To be confirmed</span></td>
                            </tr>
                            <tr>
                                <td>Birthday meal (group)</td>
                                <td>On quote</td>
                                <td><span class="highlight">To be negotiated</span></td>
                            </tr>
                            <tr>
                                <td>Spa/Hammam (group)</td>
                                <td>On quote</td>
                                <td><span class="highlight">To be confirmed</span></td>
                            </tr>
                            <tr>
                                <td>Event decoration</td>
                                <td>On quote</td>
                                <td><span class="highlight">To be negotiated</span></td>
                            </tr>
                            <tr style="background: #fff9e6; font-weight: bold;">
                                <td>ESTIMATED TOTAL</td>
                                <td>€ 7,000 - 10,000</td>
                                <td>Depending on options</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </section>

            <!-- SECTION 4: CRITICAL QUESTIONS -->
            <section class="section">
                <h2 class="section-title">
                    <span class="icon">❓</span>
                    Critical Questions for Said
                </h2>

                <div class="alert alert-success">
                    <strong>✅ EXCELLENT NEWS:</strong><br><br>
                    <p style="font-size: 1.1em; margin-bottom: 15px;">
                        <strong>Omar has checked on HotelRunner: The villa is FULLY AVAILABLE from May 14-17, 2026!</strong>
                    </p>
                    <p>All 12 rooms are free. We can accept this reservation.</p>
                </div>

                <div class="alert alert-warning">
                    <strong>⚠️ REMAINING QUESTIONS - Answers required before replying to client:</strong><br><br>

                    <ol style="margin-left: 20px; line-height: 2;">
                        <li><strong>Children policy:</strong> Age limit? Child rate? Extra beds available?</li>
                        <li><strong>Breakfast:</strong> Included in the € 2,000/night or extra? Exact rate?</li>
                        <li><strong>Hall/Spaces:</strong> Can the hall accommodate 30 people for a sit-down birthday meal?</li>
                        <li><strong>Event services:</strong> Decoration allowed? External caterer? Entertainment/music?</li>
                        <li><strong>Spa/Hammam:</strong> Group rate? Simultaneous capacity?</li>
                    </ol>
                </div>
            </section>

            <!-- SECTION 5: RESPONSE FORM SAID -->
            <section class="section">
                <h2 class="section-title">
                    <span class="icon">📝</span>
                    Response Form (Said)
                </h2>

                <div class="form-section">
                    <form id="saidResponseForm">

                        <!-- Question 1: Availability (PRE-CONFIRMED) -->
                        <div class="form-group" style="background: #e8f8f5; padding: 20px; border-radius: 10px; border: 2px solid #27ae60;">
                            <label>1. Are all 12 rooms available from May 14-17, 2026? ✅ CONFIRMED</label>
                            <div class="alert alert-success" style="margin-top: 10px;">
                                <strong>✅ Omar checked on HotelRunner:</strong><br>
                                The villa is FULLY AVAILABLE (12 free rooms).<br>
                                This question is already answered, you can proceed to the next ones.
                            </div>
                            <div class="radio-group">
                                <div class="radio-option">
                                    <input type="radio" name="disponibilite" value="oui" id="dispo-oui" required checked>
                                    <label for="dispo-oui">✅ Yes, all available (confirmed by Omar)</label>
                                </div>
                            </div>
                        </div>

                        <!-- Question 2: Children policy -->
                        <div class="form-group">
                            <label>2. Children policy *</label>
                            <input type="number" name="age_limite_gratuit" placeholder="Free child age limit (e.g. 0-2 years)">
                            <input type="number" name="tarif_enfant_pourcentage" placeholder="Child rate (% of adult rate, e.g. 50)">
                            <textarea name="politique_enfants_details" placeholder="Other details (baby cots, extra beds, etc.)"></textarea>
                        </div>

                        <!-- Question 3: Breakfast -->
                        <div class="form-group">
                            <label>3. Breakfast *</label>
                            <div class="radio-group">
                                <div class="radio-option">
                                    <input type="radio" name="petit_dej_inclus" value="inclus" id="pdj-inclus">
                                    <label for="pdj-inclus">✅ Included in € 2,000/night</label>
                                </div>
                                <div class="radio-option">
                                    <input type="radio" name="petit_dej_inclus" value="supplement" id="pdj-supplement">
                                    <label for="pdj-supplement">💰 With supplement</label>
                                </div>
                            </div>
                            <input type="number" name="tarif_petit_dej" placeholder="If extra, rate per person (EUR)" step="0.01">
                        </div>

                        <!-- Question 4: Hall capacity -->
                        <div class="form-group">
                            <label>4. Can the hall accommodate 30 people for a sit-down meal? *</label>
                            <div class="radio-group">
                                <div class="radio-option">
                                    <input type="radio" name="hall_capacite" value="oui" id="hall-oui">
                                    <label for="hall-oui">✅ Yes</label>
                                </div>
                                <div class="radio-option">
                                    <input type="radio" name="hall_capacite" value="jardin" id="hall-jardin">
                                    <label for="hall-jardin">🌳 No, but garden possible</label>
                                </div>
                                <div class="radio-option">
                                    <input type="radio" name="hall_capacite" value="non" id="hall-non">
                                    <label for="hall-non">❌ No</label>
                                </div>
                            </div>
                        </div>

                        <!-- Question 5: Event services -->
                        <div class="form-group">
                            <label>5. Allowed event services *</label>
                            <div class="checkbox-group">
                                <div class="checkbox-option">
                                    <input type="checkbox" name="autorisation[]" value="decoration" id="auth-deco">
                                    <label for="auth-deco">🎨 Decoration (balloons, banners, etc.)</label>
                                </div>
                                <div class="checkbox-option">
                                    <input type="checkbox" name="autorisation[]" value="traiteur" id="auth-traiteur">
                                    <label for="auth-traiteur">🍽️ External caterer allowed</label>
                                </div>
                                <div class="checkbox-option">
                                    <input type="checkbox" name="autorisation[]" value="musique" id="auth-musique">
                                    <label for="auth-musique">🎵 Music/DJ allowed</label>
                                </div>
                                <div class="checkbox-option">
                                    <input type="checkbox" name="autorisation[]" value="alcool" id="auth-alcool">
                                    <label for="auth-alcool">🍷 Alcohol allowed (BYO)</label>
                                </div>
                            </div>
                            <input type="text" name="horaire_limite_musique" placeholder="If music allowed, time limit (e.g. 23:00)">
                            <input type="number" name="supplement_traiteur" placeholder="If external caterer, kitchen supplement (EUR)" step="0.01">
                        </div>

                        <!-- Question 6: Spa/Hammam -->
                        <div class="form-group">
                            <label>6. Spa & Hammam - Group rate</label>
                            <input type="number" name="tarif_spa_groupe" placeholder="Group rate (USD total or per person)" step="0.01">
                            <input type="number" name="capacite_spa_simultanee" placeholder="Simultaneous capacity (number of people)">
                            <textarea name="spa_details" placeholder="Details (duration, included services, etc.)"></textarea>
                        </div>

                        <!-- Question 7: Birthday meal -->
                        <div class="form-group">
                            <label>7. Birthday meal (Restaurant Thaifa)</label>
                            <div class="radio-group">
                                <div class="radio-option">
                                    <input type="radio" name="repas_restaurant" value="disponible" id="repas-dispo">
                                    <label for="repas-dispo">✅ Available on quote</label>
                                </div>
                                <div class="radio-option">
                                    <input type="radio" name="repas_restaurant" value="non" id="repas-non">
                                    <label for="repas-non">❌ Not available</label>
                                </div>
                            </div>
                            <input type="number" name="tarif_menu_groupe" placeholder="Estimated group menu rate per person (EUR)" step="0.01">
                        </div>

                        <!-- Question 8: Booking conditions -->
                        <div class="form-group">
                            <label>8. Event booking conditions</label>
                            <input type="number" name="acompte_pourcentage" placeholder="Required deposit (% of total, e.g. 50)" step="0.01">
                            <input type="number" name="caution_montant" placeholder="Event deposit (EUR)" step="0.01">
                            <textarea name="conditions_annulation" placeholder="Cancellation policy (e.g. refund up to X days before, etc.)"></textarea>
                        </div>

                        <!-- Question 9: Additional notes -->
                        <div class="form-group">
                            <label>9. Additional Notes / Observations</label>
                            <textarea name="notes_said" placeholder="Any additional information Said wishes to add..." rows="5"></textarea>
                        </div>

                        <!-- Action buttons -->
                        <div class="btn-container">
                            <button type="button" class="btn btn-primary" onclick="exporterReponses()">
                                <span>💾</span>
                                Export Answers (JSON)
                            </button>
                            <button type="button" class="btn btn-success" onclick="copierReponses()">
                                <span>📋</span>
                                Copy to Clipboard
                            </button>
                            <button type="button" class="btn btn-secondary" onclick="imprimerDocument()">
                                <span>🖨️</span>
                                Print
                            </button>
                        </div>
                    </form>
                </div>
            </section>

            <!-- SECTION 6: NEXT STEPS -->
            <section class="section">
                <h2 class="section-title">
                    <span class="icon">🎯</span>
                    Next Steps
                </h2>

                <div class="alert alert-success">
                    <strong>✅ Once this form is completed:</strong><br><br>

                    <ol style="margin-left: 20px; line-height: 2;">
                        <li>Click on "<strong>Export Answers</strong>" to download a JSON file</li>
                        <li>Send this JSON file to Claude (Omar)</li>
                        <li>Claude will prepare a <strong>personalized professional client response</strong></li>
                        <li>Final validation by Said/Omar before sending to the client</li>
                        <li>Send the proposal to the client via WhatsApp</li>
                    </ol>
                </div>
            </section>

        </div>

        <!-- FOOTER -->
        <div class="footer">
            <p><strong>Villa Thaifa Property Management System</strong></p>
            <p>Document generated January 28, 2026 by Claude (AI Assistant)</p>
            <p>For: Said Thaifa & Omar El Mountassir</p>
        </div>
    </div>

    <script>
        function exporterReponses() {
            const form = document.getElementById('saidResponseForm');
            const formData = new FormData(form);

            // Convert FormData to JSON object
            const data = {
                timestamp: new Date().toISOString(),
                client_request: {
                    date_received: "2026-01-28 20:16",
                    people: 30,
                    adults: 20,
                    children: 10,
                    dates: "May 14-17 2026",
                    nights: 3,
                    event_type: "Birthday"
                },
                said_responses: {}
            };

            // Process checkboxes
            const authorizations = [];
            formData.getAll('autorisation[]').forEach(val => authorizations.push(val));

            // Get all values
            for (let [key, value] of formData.entries()) {
                if (key !== 'autorisation[]') {
                    data.said_responses[key] = value;
                }
            }

            data.said_responses.authorizations = authorizations;

            // Create blob and download
            const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
            const url = URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = `reponses-said-anniversaire-30p-${new Date().toISOString().split('T')[0]}.json`;
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
            URL.revokeObjectURL(url);
        }

        function copierReponses() {
            const form = document.getElementById('saidResponseForm');
            const data = new FormData(form);
            let textReponse = "📝 REPONSES SAID - ANNIVERSAIRE 30 PERS (14-17 Mai)\n\n";

            for (let [key, value] of data.entries()) {
                if (value && value.trim() !== '') {
                    textReponse += `- ${key}: ${value}\n`;
                }
            }

            navigator.clipboard.writeText(textReponse).then(() => {
                alert('Answers copied to clipboard! You can paste them into WhatsApp or Claude.');
            }).catch(err => {
                console.error('Error copying text: ', err);
                alert('Copy error. Please use export instead.');
            });
        }

        function imprimerDocument() {
            window.print();
        }
    </script>
</body>
</html>
