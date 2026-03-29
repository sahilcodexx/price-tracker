import { Product, SendPriceDropAlertResult } from "@/utils/types";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY!);

export async function sendPriceDropAlert(
  userEmail: string,
  product: Product,
  oldPrice: number,
  newPrice: number,
): Promise<SendPriceDropAlertResult> {
  if (!process.env.RESEND_FROM_EMAIL) {
    return { error: "RESEND_FROM_EMAIL environment variable is not set" };
  }

  try {
    const priceDrop = oldPrice - newPrice;
    const percentageDrop = ((priceDrop / oldPrice) * 100).toFixed(1);

    const data = await resend.emails.send({
      from: process.env.RESEND_FROM_EMAIL!,
      to: userEmail,
      subject: `🎉 Price Drop Alert: ${product.name}`,
      html: `
    <!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&display=swap" rel="stylesheet">
    <style>
      body { background-color: #ffffff; margin: 0; padding: 0; -webkit-font-smoothing: antialiased; }
      .container { max-width: 600px; margin: 0 auto; padding: 48px 24px; }
      .brand-mono { font-family: 'Inter', sans-serif; font-weight: 600; font-size: 11px; letter-spacing: 0.1em; color: #111111; text-transform: uppercase; }
      .text-main { font-family: 'Inter', sans-serif; font-size: 14px; color: #71717a; line-height: 1.5; }
      .price-card { border: 1px solid #e4e4e7; border-radius: 6px; margin-top: 32px; overflow: hidden; }
      .product-title { font-family: 'Inter', sans-serif; font-size: 14px; font-weight: 500; color: #18181b; margin: 0; }
      .price-tag { font-family: 'Inter', sans-serif; font-size: 24px; font-weight: 600; color: #18181b; letter-spacing: -0.04em; }
    </style>
  </head>
  <body>
    <div class="container">
      <table width="100%" border="0" cellspacing="0" cellpadding="0">
        <tr>
          <td style="padding-bottom: 40px;">
            <div class="brand-mono">Price Tracker</div>
          </td>
        </tr>
        <tr>
          <td>
            <h1 style="font-family: 'Inter', sans-serif; font-size: 20px; font-weight: 600; color: #18181b; letter-spacing: -0.02em; margin: 0 0 8px 0;">
              Price update: ${product.name}
            </h1>
            <p class="text-main" style="margin: 0;">
              We detected a price change for an item on your watchlist.
            </p>
          </td>
        </tr>
      </table>

      <div class="price-card">
        <table width="100%" border="0" cellspacing="0" cellpadding="0">
          <tr>
            ${
              product.image_url
                ? `
            <td width="140" valign="middle" style="padding: 24px; background-color: #fafafa; border-right: 1px solid #e4e4e7; text-align: center;">
              <img src="${product.image_url}" alt="${product.name}" width="100" style="mix-blend-mode: multiply; filter: contrast(1.05);">
            </td>
            `
                : ""
            }
            
            <td valign="middle" style="padding: 24px;">
              <table width="100%" border="0" cellspacing="0" cellpadding="0">
                <tr>
                  <td>
                    <div style="display: inline-block; font-size: 11px; font-weight: 600; background: #f4f4f5; color: #18181b; padding: 2px 8px; border-radius: 4px; margin-bottom: 12px; border: 1px solid #e4e4e7;">
                      ${percentageDrop}% Drop
                    </div>
                    <p class="product-title">${product.name}</p>
                  </td>
                </tr>
                <tr>
                  <td style="padding-top: 20px;">
                    <div style="font-size: 12px; color: #a1a1aa; text-decoration: line-through; margin-bottom: 2px;">
                      ${product.currency} ${oldPrice.toFixed(2)}
                    </div>
                    <div class="price-tag">
                      ${product.currency} ${newPrice.toFixed(2)}
                    </div>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
        </table>
      </div>

      <table width="100%" border="0" cellspacing="0" cellpadding="0" style="margin-top: 32px;">
        <tr>
          <td align="left" valign="middle">
            <a href="${product.url}" style="background-color: #18181b; color: #ffffff; padding: 10px 20px; border-radius: 6px; text-decoration: none; font-family: 'Inter', sans-serif; font-size: 13px; font-weight: 500; display: inline-block;">
              View Product
            </a>
            <span style="padding-left: 20px; font-family: 'Inter', sans-serif; font-size: 13px; color: #16a34a; font-weight: 500;">
              Save ${product.currency} ${priceDrop.toFixed(2)}
            </span>
          </td>
        </tr>
      </table>

      <table width="100%" border="0" cellspacing="0" cellpadding="0" style="margin-top: 64px; border-top: 1px solid #f4f4f5; padding-top: 24px;">
        <tr>
          <td>
            <p style="font-family: 'Inter', sans-serif; font-size: 12px; color: #a1a1aa; margin: 0; line-height: 1.6;">
              You are receiving this alert for <strong>${product.name}</strong>. 
              Manage your <a href="${process.env.NEXT_PUBLIC_APP_URL}" style="color: #71717a; text-decoration: underline;">tracking dashboard</a> to adjust frequency.
            </p>
          </td>
        </tr>
      </table>
    </div>
  </body>
</html>
      `,
    });

    return { success: true, data };
  } catch (error: any) {
    console.error("Email error:", error);
    return { error: error.message ?? error };
  }
}
