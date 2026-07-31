<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Portfolio</title>
    
    <!-- Google Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Courier+Prime:ital,wght@0,400;0,700;1,400;1,700&family=Pixelify+Sans:wght@400&display=swap" rel="stylesheet">
    
    <!-- CSS -->
    <link rel="stylesheet" href="css/style.css">
</head>
<body>

    <div class="receipt-container">
        
        <header class="receipt-header">
            <h1 class="receipt-title">PORTFOLIO</h1>
        </header>

        <main class="receipt-list">
            
            <!-- 001: About me -->
            <section class="receipt-item">
                <button class="receipt-summary" aria-expanded="false" aria-controls="section-about">
                    <span class="item-number">001</span>
                    <span class="item-name">About me</span>
                </button>
                <div id="section-about" class="receipt-detail" aria-hidden="true">
                    <div class="detail-content">
                        <!-- Content goes here in step 6 -->
                    </div>
                </div>
            </section>

            <!-- 002: Logofolio -->
            <section class="receipt-item">
                <button class="receipt-summary" aria-expanded="false" aria-controls="section-logofolio">
                    <span class="item-number">002</span>
                    <span class="item-name">Logofolio</span>
                </button>
                <div id="section-logofolio" class="receipt-detail" aria-hidden="true">
                    <div class="detail-content">
                        <!-- Content goes here -->
                    </div>
                </div>
            </section>

            <!-- 003: Branding -->
            <section class="receipt-item">
                <button class="receipt-summary" aria-expanded="false" aria-controls="section-branding">
                    <span class="item-number">003</span>
                    <span class="item-name">Branding</span>
                </button>
                <div id="section-branding" class="receipt-detail" aria-hidden="true">
                    <div class="detail-content">
                        <!-- Content goes here -->
                    </div>
                </div>
            </section>

            <!-- 004: Packaging -->
            <section class="receipt-item">
                <button class="receipt-summary" aria-expanded="false" aria-controls="section-packaging">
                    <span class="item-number">004</span>
                    <span class="item-name">Packaging</span>
                </button>
                <div id="section-packaging" class="receipt-detail" aria-hidden="true">
                    <div class="detail-content">
                        <!-- Content goes here -->
                    </div>
                </div>
            </section>

            <!-- 005: Font -->
            <section class="receipt-item">
                <button class="receipt-summary" aria-expanded="false" aria-controls="section-font">
                    <span class="item-number">005</span>
                    <span class="item-name">Font</span>
                </button>
                <div id="section-font" class="receipt-detail" aria-hidden="true">
                    <div class="detail-content">
                        <!-- Content goes here -->
                    </div>
                </div>
            </section>

        </main>

        <footer class="receipt-footer">
            <span class="footer-label">Total</span>
            <span class="footer-value">1 designer</span>
        </footer>

    </div>

    <!-- JS -->
    <script src="js/script.js"></script>
</body>
</html>