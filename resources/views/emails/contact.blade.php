<!DOCTYPE html>
<html lang="sr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Nova poruka sa kontakt forme</title>
</head>
<body style="margin:0; padding:0; background-color:#fdf2f8; font-family:system-ui,-apple-system,sans-serif;">
    <table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:#fdf2f8; padding:40px 0;">
        <tr>
            <td align="center">
                <table width="600" cellpadding="0" cellspacing="0" border="0" style="background-color:#fff0f3; border-radius:24px; overflow:hidden; box-shadow:0 20px 40px rgba(0,0,0,0.08);">
                    <tr>
                        <td style="background:linear-gradient(135deg,#ec4899,#f472b6); padding:32px 40px; text-align:center;">
                            <h1 style="margin:0; color:#fff; font-size:24px; font-weight:800; letter-spacing:-0.5px;">Nutri Beba</h1>
                            <p style="margin:8px 0 0; color:#fce7f3; font-size:14px;">Nova poruka sa kontakt forme</p>
                        </td>
                    </tr>
                    <tr>
                        <td style="padding:40px;">
                            <p style="margin:0 0 24px; color:#831843; font-size:16px; line-height:1.6;">Dobili ste novu poruku od <strong>{{ $data['name'] }}</strong> ({{ $data['email'] }}):</p>
                            <table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:#fff; border-radius:16px; border:1px solid #fbcfe8;">
                                <tr>
                                    <td style="padding:24px;">
                                        <p style="margin:0; color:#be185d; font-size:14px; font-weight:600; text-transform:uppercase; letter-spacing:0.5px; margin-bottom:12px;">Poruka</p>
                                        <p style="margin:0; color:#831843; font-size:15px; line-height:1.8; white-space:pre-wrap;">{{ $data['message'] }}</p>
                                    </td>
                                </tr>
                            </table>
                            <p style="margin:32px 0 0; color:#9d174d; font-size:13px; text-align:center;">Primljeno {{ now()->format('d.m.Y. H:i') }}</p>
                        </td>
                    </tr>
                </table>
            </td>
        </tr>
    </table>
</body>
</html>
