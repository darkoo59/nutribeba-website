<!DOCTYPE html>
<html lang="sr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Potvrda email adrese - Nutri Beba</title>
</head>
<body style="margin:0; padding:0; background-color:#fdf2f8; font-family:system-ui,-apple-system,sans-serif;">
    <table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:#fdf2f8; padding:40px 0;">
        <tr>
            <td align="center">
                <table width="600" cellpadding="0" cellspacing="0" border="0" style="background-color:#fff0f3; border-radius:24px; overflow:hidden; box-shadow:0 20px 40px rgba(0,0,0,0.08);">
                    <tr>
                        <td style="background:linear-gradient(135deg,#ec4899,#f472b6); padding:32px 40px; text-align:center;">
                            <h1 style="margin:0; color:#fff; font-size:24px; font-weight:800; letter-spacing:-0.5px;">Nutri Beba</h1>
                            <p style="margin:8px 0 0; color:#fce7f3; font-size:14px;">Dobrodošli! Molimo potvrdite vašu email adresu</p>
                        </td>
                    </tr>
                    <tr>
                        <td style="padding:40px;">
                            <p style="margin:0 0 24px; color:#831843; font-size:16px; line-height:1.6;">Poštovani {{ $name }},</p>
                            <p style="margin:0 0 24px; color:#831843; font-size:16px; line-height:1.6;">Hvala što ste se registrovali na Nutri Beba. Da biste aktivirali nalog i pristupili kursevima, potvrdite vašu email adresu klikom na dugme ispod.</p>
                            <table width="100%" cellpadding="0" cellspacing="0" border="0">
                                <tr>
                                    <td align="center">
                                        <a href="{{ $url }}" style="display:inline-block; background:linear-gradient(135deg,#ec4899,#f472b6); color:#fff; text-decoration:none; padding:16px 40px; border-radius:16px; font-size:16px; font-weight:700; box-shadow:0 10px 25px rgba(236,72,153,0.3);">Potvrdi email adresu</a>
                                    </td>
                                </tr>
                            </table>
                            <p style="margin:32px 0 0; color:#9d174d; font-size:14px; line-height:1.6;">Ako dugme ne funkcioniše, kopirajte i nalepite sledeću adresu u vaš pretraživač:</p>
                            <p style="margin:8px 0 0; color:#831843; font-size:14px; word-break:break-all; background:#fff; padding:12px 16px; border-radius:12px; border:1px solid #fbcfe8;">{{ $url }}</p>
                            <p style="margin:32px 0 0; color:#9d174d; font-size:13px; text-align:center;">Ako niste vi kreirali nalog, ignorišite ovu poruku.</p>
                        </td>
                    </tr>
                </table>
            </td>
        </tr>
    </table>
</body>
</html>
