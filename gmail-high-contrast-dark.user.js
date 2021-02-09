@-moz-document domain("mail.google.com") {
    :root {
        --color-shark: #202124;
        --color-athensgray: #e8eaed;
        --color-white: #fff;
        --color-dovegray: #6B6B6B;
    }
    
    a {
        color:  var(--color-athensgray) !important;
    }
    
    svg {
        color: var(--color-white) !important;
    }
    
    /* Main Layout */
    
    header[role="banner"], div[role="navigation"], div[role="navigation"] + div {
        background: var(--color-shark) !important;
    }
    
    /* Search */
    
    form[role="search"] {
        background: rgba(241,243,244,0.24);
    }
    
    form table, form tr {
        background: transparent !important;
    }
    
    /* Tabs */
    
    div[role="tab"] * {
        color: var(--color-white) !important;
    }
    
    /* Table Elements */
    
    table {
        background: var(--color-shark) !important;
    } 
    
    /* Email List Column */
    
    table[role="grid"] {
        border-color: var(--color-shark) !important;
    }
    
    tr[role="row"] {
        background: var(--color-shark) !important;
        box-shadow: inset 0 -1px 0 0 #000;
        color:  var(--color-athensgray) !important;
    }
    
    tr[role="row"] > td::before {
        background-color: var(--color-white) !important;
    }
    
    div[role="link"] > div > span {
        color: var(--color-dovegray) !important;
    }
    
    /* Email Sidebar */
    
    .wT>.n3 .byl:first-child .aim:first-child .nZ {
        background-color: var(--color-shark) !important;
    }
    
    div[data-tooltip] > div > div {
        border-color: var(--color-white) !important;
        filter: contrast(0) brightness(100);
    }
    }