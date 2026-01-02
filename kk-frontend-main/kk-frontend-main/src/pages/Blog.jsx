import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import percale from "../assets/percale.png";
import percale1 from "../assets/blogg.png";
import percale2 from "../assets/blogg2.png";
import percale3 from "../assets/blogg3.png";
import percale4 from "../assets/blogg4.png";
import percale5 from "../assets/blogg5.png";

// --- CURATED BLOG DATA (Educating the Customer) ---
const blogPosts = [
  {
    id: 'percale-vs-sateen',
    title: 'Percale vs. Sateen: The Ultimate Weave Battle',
    excerpt: 'One is crisp and cool, the other is silky and warm. Learn the scientific difference between these weaves to find your perfect sleep match.',
    date: 'Dec 12, 2024',
    readTime: '5 min read',
    category: 'Fabric Science',
    image: [percale],
    featured: true, // Main Highlight Blog
    // --- START OF DYNAMIC CONTENT ---
    fullContent: `
      <h2 style="font-size: 2.5rem; font-family: serif; color: #1F2937; margin-bottom: 2.5rem; padding-bottom: 0.5rem; font-weight: 700; border-bottom: 3px solid #D1D5DB; cursor: pointer; transition: color 0.4s, transform 0.4s, text-shadow 0.4s;" 
          onmouseover="this.style.color='#312E81'; this.style.transform='translateY(-2px)'; this.style.textShadow='0 3px 5px rgba(49, 46, 129, 0.4)'"
          onmouseout="this.style.color='#1F2937'; this.style.transform='translateY(0)'; this.style.textShadow='none'">
          ✨ The Fabric Showdown: Percale vs. Sateen
      </h2>
      <p style="font-size: 1.125rem; line-height: 1.8; color: #4B5563; border-left: 5px solid #F3F4F6; padding-left: 15px; font-style: italic;">
          Choosing your sheets comes down to two key weaves. They create <strong style="color: #06B6D4; transition: color 0.3s;" onmouseover="this.style.color='#0E7490'" onmouseout="this.style.color='#06B6D4'">drastically different tactile experiences</strong>. Know the difference to find your perfect match.
      </p>

      <div style="margin: 3.5rem 0; padding: 2rem; border: 2px solid #14B8A6; background-color: #F0FDFA; border-radius: 12px; box-shadow: 0 6px 12px rgba(20, 184, 166, 0.2); transition: transform 0.3s;" 
          onmouseover="this.style.transform='scale(1.01)'"
          onmouseout="this.style.transform='scale(1)'">
          <p style="margin: 0; font-size: 1.3rem; font-family: serif; font-weight: 800; color: #14B8A6;">
              THE EXPERT GUIDELINE — Quick Check:
          </p>
          <p style="margin-top: 1rem; font-size: 1.1rem; color: #0D9488; line-height: 1.7;">
              ❄️ For <strong style="color: #06B6D4;">hot sleepers</strong> who crave a crisp, matte finish, choose <em style="font-style: normal; text-decoration: underline; text-decoration-color: #06B6D4;">PERCALE</em>.
          </p>
          <p style="margin-top: 0.5rem; font-size: 1.1rem; color: #F59E0B; line-height: 1.7;">
              👑 For those prioritizing a luxurious, warm, and silky drape, choose <em style="font-style: normal; text-decoration: underline; text-decoration-color: #F59E0B;">SATEEN</em>.
          </p>
      </div>

      <h3 style="font-size: 1.75rem; color: #312E81; margin-top: 3.5rem; margin-bottom: 1rem; border-left: 6px solid #4F46E5; padding-left: 15px; font-weight: 700; cursor: pointer; transition: color 0.3s, transform 0.3s, background-color 0.3s;"
          onmouseover="this.style.color='#6366F1'; this.style.transform='skewX(-1deg) scaleX(1.01)'; this.style.backgroundColor='#F3F4F6'"
          onmouseout="this.style.color='#312E81'; this.style.transform='skewX(0) scaleX(1)'; this.style.backgroundColor='transparent'">
          Percale: The Crisp, Cool Weave
      </h3>
      <ul style="list-style-type: none; padding-left: 0; margin-top: 1.5rem;">
          <li style="margin-bottom: 1rem; background-color: #F9FAFB; padding: 1rem 1.5rem; border-radius: 8px; border-left: 4px solid #3B82F6; transition: background-color 0.3s, transform 0.3s, border-left-color 0.3s; cursor: pointer;"
              onmouseover="this.style.backgroundColor='#EBF4FF'; this.style.transform='translateY(-2px)'"
              onmouseout="this.style.backgroundColor='#F9FAFB'; this.style.transform='translateY(0)'; this.style.borderLeftColor='#3B82F6'">
              <strong style="color: #3B82F6;">HAND-FEEL:</strong> Lightweight texture, similar to a freshly pressed garment.
          </li>
          <li style="margin-bottom: 1rem; background-color: #F9FAFB; padding: 1rem 1.5rem; border-radius: 8px; border-left: 4px solid #3B82F6; transition: background-color 0.3s, transform 0.3s, border-left-color 0.3s; cursor: pointer;"
              onmouseover="this.style.backgroundColor='#EBF4FF'; this.style.transform='translateY(-2px)'"
              onmouseout="this.style.backgroundColor='#F9FAFB'; this.style.transform='translateY(0)'; this.style.borderLeftColor='#3B82F6'">
              <strong style="color: #3B82F6;">PERFORMANCE:</strong> Superior airflow, making it the top choice for hot climates.
          </li>
          <li style="margin-bottom: 1rem; background-color: #F9FAFB; padding: 1rem 1.5rem; border-radius: 8px; border-left: 4px solid #3B82F6; transition: background-color 0.3s, transform 0.3s, border-left-color 0.3s; cursor: pointer;"
              onmouseover="this.style.backgroundColor='#EBF4FF'; this.style.transform='translateY(-2px)'"
              onmouseout="this.style.backgroundColor='#F9FAFB'; this.style.transform='translateY(0)'; this.style.borderLeftColor='#3B82F6'">
              <strong style="color: #3B82F6;">AESTHETICS:</strong> A refined, non-shiny, matte appearance.
          </li>
      </ul>

      <h3 style="font-size: 1.75rem; color: #F59E0B; margin-top: 3rem; margin-bottom: 1rem; border-left: 6px solid #FCD34D; padding-left: 15px; font-weight: 700; cursor: pointer; transition: color 0.3s, transform 0.3s, background-color 0.3s;"
          onmouseover="this.style.color='#FBBF24'; this.style.transform='skewX(-1deg) scaleX(1.01)'; this.style.backgroundColor='#FFFBEB'"
          onmouseout="this.style.color='#F59E0B'; this.style.transform='skewX(0) scaleX(1)'; this.style.backgroundColor='transparent'">
          Sateen: The Warm, Silky Weave
      </h3>
      <ul style="list-style-type: none; padding-left: 0; margin-top: 1.5rem;">
          <li style="margin-bottom: 1rem; background-color: #F9FAFB; padding: 1rem 1.5rem; border-radius: 8px; border-left: 4px solid #FCD34D; transition: background-color 0.3s, transform 0.3s, border-left-color 0.3s; cursor: pointer;"
              onmouseover="this.style.backgroundColor='#FEF3C7'; this.style.transform='translateY(-2px)'"
              onmouseout="this.style.backgroundColor='#F9FAFB'; this.style.transform='translateY(0)'; this.style.borderLeftColor='#FCD34D'">
              <strong style="color: #F59E0B;">DRAPE:</strong> Floating yarns create an incredibly smooth surface with a subtle sheen.
          </li>
          <li style="margin-bottom: 1rem; background-color: #F9FAFB; padding: 1rem 1.5rem; border-radius: 8px; border-left: 4px solid #FCD34D; transition: background-color 0.3s, transform 0.3s, border-left-color 0.3s; cursor: pointer;"
              onmouseover="this.style.backgroundColor='#FEF3C7'; this.style.transform='translateY(-2px)'"
              onmouseout="this.style.backgroundColor='#F9FAFB'; this.style.transform='translateY(0)'; this.style.borderLeftColor='#FCD34D'">
              <strong style="color: #F59E0B;">SENSATION:</strong> Delivers a buttery-soft feel straight out of the packaging.
          </li>
          <li style="margin-bottom: 1rem; background-color: #F9FAFB; padding: 1rem 1.5rem; border-radius: 8px; border-left: 4px solid #FCD34D; transition: background-color 0.3s, transform 0.3s, border-left-color 0.3s; cursor: pointer;"
              onmouseover="this.style.backgroundColor='#FEF3C7'; this.style.transform='translateY(-2px)'"
              onmouseout="this.style.backgroundColor='#F9FAFB'; this.style.transform='translateY(0)'; this.style.borderLeftColor='#FCD34D'">
              <strong style="color: #F59E0B;">THERMAL PROFILE:</strong> Reduced breathability, making it the preferred choice for cooler climates.
          </li>
      </ul>

      <h3 style="font-size: 1.75rem; color: #1F2937; margin-top: 3.5rem; margin-bottom: 1.5rem; text-align: center; font-weight: 700; border-bottom: 2px dashed #D1D5DB; padding-bottom: 10px;">
          Quick Reference: Specifications Overview
      </h3>
      <table style="width: 100%; border-collapse: collapse; margin-top: 1.5rem; font-size: 0.95rem; border: 1px solid #D1D5DB; border-radius: 8px; overflow: hidden; box-shadow: 0 4px 6px rgba(0,0,0,0.05);">
          <thead>
              <tr style="background-color: #F3F4F6;">
                  <th style="padding: 1rem; border: 1px solid #E5E7EB; text-align: left; color: #1F2937; font-size: 1rem; font-weight: 700;">Feature</th>
                  <th style="padding: 1rem; border: 1px solid #E5E7EB; text-align: left; color: #3B82F6; font-size: 1rem; font-weight: 700;">Percale</th>
                  <th style="padding: 1rem; border: 1px solid #E5E7EB; text-align: left; color: #F59E0B; font-size: 1rem; font-weight: 700;">Sateen</th>
              </tr>
          </thead>
          <tbody>
              <tr>
                  <td style="padding: 0.75rem; border: 1px solid #E5E7EB; font-weight: 600; background-color: #F9FAFB;">Weave Pattern</td>
                  <td style="padding: 0.75rem; border: 1px solid #E5E7EB;">Plain (1-over, 1-under)</td>
                  <td style="padding: 0.75rem; border: 1px solid #E5E7EB;">Satin (4-over, 1-under)</td>
              </tr>
              <tr>
                  <td style="padding: 0.75rem; border: 1px solid #E5E7EB; font-weight: 600; background-color: #F9FAFB;">Hand-Feel</td>
                  <td style="padding: 0.75rem; border: 1px solid #E5E7EB; color: #3B82F6;">Crisp, cool, matte</td>
                  <td style="padding: 0.75rem; border: 1px solid #E5E7EB; color: #F59E0B;">Buttery, silky, luxurious</td>
              </tr>
              <tr>
                  <td style="padding: 0.75rem; border: 1px solid #E5E7EB; font-weight: 600; background-color: #F9FAFB;">Best For</td>
                  <td style="padding: 0.75rem; border: 1px solid #E5E7EB;">Hot sleepers / Summer</td>
                  <td style="padding: 0.75rem; border: 1px solid #E5E7EB;">Cold sleepers / Winter</td>
              </tr>
          </tbody>
      </table>

      <p style="font-size: 1.15rem; line-height: 1.8; color: #4B5563; text-align: center; margin-top: 3.5rem; font-weight: 500;">
          <strong style="color: #1F2937;">Final Verdict:</strong> The optimal choice depends entirely on your personal sleeping preference and climate. Knowing the science empowers your decision to achieve superior sleep.
      </p>
    `
    // --- END OF DYNAMIC CONTENT ---
  },
  {
    id: 'thread-count-myth',
    title: 'Why High Thread Count is a Lie',
    excerpt: 'Marketing gimmicks have you believing 1000TC is better. Here’s why 300-400 Single Ply is actually the gold standard for durability.',
    date: 'Nov 28, 2024',
    readTime: '4 min read',
    category: 'Expert Tips',
    image: [percale1],
    featured: false,
    fullContent: `
      <h2 style="font-size: 2.5rem; font-family: serif; color: #1F2937; margin-bottom: 2.5rem; padding-bottom: 0.5rem; font-weight: 700; border-bottom: 3px solid #D1D5DB; cursor: pointer; transition: color 0.4s, transform 0.4s, text-shadow 0.4s;" 
          onmouseover="this.style.color='#DC2626'; this.style.transform='translateY(-2px)'; this.style.textShadow='0 3px 5px rgba(220, 38, 38, 0.4)'"
          onmouseout="this.style.color='#1F2937'; this.style.transform='translateY(0)'; this.style.textShadow='none'">
          ❌ The Thread Count Deception: A Marketing Lie
      </h2>
      <p style="font-size: 1.125rem; line-height: 1.8; color: #4B5563; border-left: 5px solid #F3F4F6; padding-left: 15px; font-style: italic;">
          Consumers are conditioned to believe that a higher thread count (TC) is synonymous with superior quality. This is the single biggest misconception in the bedding industry! Metrics above 500 TC often signify <em style="color: #B91C1C; font-style: normal;">misleading manufacturing practices</em> that compromise the sheet's durability and breathability.
      </p>

      <h3 style="font-size: 1.75rem; color: #312E81; margin-top: 3rem; margin-bottom: 1rem; border-left: 6px solid #4F46E5; padding-left: 15px; font-weight: 700; cursor: pointer; transition: color 0.3s, transform 0.3s, background-color 0.3s;"
          onmouseover="this.style.color='#6366F1'; this.style.transform='skewX(-1deg) scaleX(1.01)'; this.style.backgroundColor='#F3F4F6'"
          onmouseout="this.style.color='#312E81'; this.style.transform='skewX(0) scaleX(1)'; this.style.backgroundColor='transparent'">
          Defining Honest Thread Count
      </h3>
      <p style="font-size: 1.1rem; line-height: 1.7; color: #374151;">
          Thread count is the sum of horizontal (weft) and vertical (warp) threads woven into one square inch of fabric. A straightforward, honest weave using high-quality, single-ply cotton typically peaks around 400 threads per square inch.
      </p>

      <div style="margin: 3rem 0; padding: 2rem; border: 2px solid #F59E0B; background-color: #FFFBEB; border-radius: 12px; box-shadow: 0 6px 12px rgba(245, 158, 11, 0.2); transition: transform 0.3s;" 
          onmouseover="this.style.transform='scale(1.01)'"
          onmouseout="this.style.transform='scale(1)'">
          <p style="margin: 0; font-size: 1.3rem; font-family: serif; font-weight: 800; color: #D97706;">
              THE GOLD STANDARD: Quality Over Quantity
          </p>
          <p style="margin-top: 0.75rem; font-size: 1.1rem; color: #4B5563; line-height: 1.6;">
              The sustainable limit is 600 TC. Always confirm the sheet uses <strong style="color: #10B981;">Single-Ply</strong> cotton for true durability and feel.
          </p>
      </div>

      <h3 style="font-size: 1.75rem; color: #14B8A6; margin-top: 3rem; margin-bottom: 1rem; border-left: 6px solid #14B8A6; padding-left: 15px; font-weight: 700; cursor: pointer; transition: color 0.3s, transform 0.3s, background-color 0.3s;"
          onmouseover="this.style.color='#0D9488'; this.style.transform='skewX(-1deg) scaleX(1.01)'; this.style.backgroundColor='#F0FDFA'"
          onmouseout="this.style.color='#14B8A6'; this.style.transform='skewX(0) scaleX(1)'; this.style.backgroundColor='transparent'">
          The Ply Problem: Artificially Inflated Numbers
      </h3>
      <p style="font-size: 1.1rem; line-height: 1.7; color: #374151;">
          To inflate the number, manufacturers utilize "multi-ply yarn," twisting several lower-quality strands together and counting them individually:
      </p>
      <ul style="list-style-type: none; padding-left: 0; margin-top: 1rem;">
          <li style="margin-bottom: 0.75rem; background-color: #F8FAFF; padding: 1rem 1.5rem; border-radius: 8px; border-left: 5px solid #10B981; transition: background-color 0.3s, transform 0.3s; cursor: pointer;"
              onmouseover="this.style.backgroundColor='#EBF4FF'; this.style.transform='scale(1.01)'"
              onmouseout="this.style.backgroundColor='#F8FAFF'; this.style.transform='scale(1)'">
              <strong style="color: #059669;">Single-Ply (The Standard):</strong> One long, strong fiber. Durable, light, and breathable.
          </li>
          <li style="margin-bottom: 0.75rem; background-color: #F8FAFF; padding: 1rem 1.5rem; border-radius: 8px; border-left: 5px solid #EF4444; transition: background-color 0.3s, transform 0.3s; cursor: pointer;"
              onmouseover="this.style.backgroundColor='#FEE2E2'; this.style.transform='scale(1.01)'"
              onmouseout="this.style.backgroundColor='#F8FAFF'; this.style.transform='scale(1)'">
              <strong style="color: #B91C1C;">Multi-Ply (The Gimmick):</strong> Multiple weaker strands are counted as one thread, resulting in weaker, heavier, and less breathable sheets.
          </li>
      </ul>

      <h3 style="font-size: 1.75rem; color: #1F2937; margin-top: 3rem; margin-bottom: 1rem; border-bottom: 1px solid #D1D5DB; padding-bottom: 5px; font-weight: 600;">
          Final Metrics Checklist
      </h3>
      <table style="width: 100%; border-collapse: collapse; margin-top: 1.5rem; font-size: 0.95rem; border: 1px solid #D1D5DB; border-radius: 8px; overflow: hidden; box-shadow: 0 4px 6px rgba(0,0,0,0.05);">
          <thead>
              <tr style="background-color: #ECFDF5;">
                  <th style="padding: 1rem; border: 1px solid #E5E7EB; text-align: left; color: #059669; font-size: 1rem; font-weight: 700;">Metric</th>
                  <th style="padding: 1rem; border: 1px solid #E5E7EB; text-align: left; color: #10B981; font-size: 1rem; font-weight: 700;">Recommendation</th>
              </tr>
          </thead>
          <tbody>
              <tr>
                  <td style="padding: 0.75rem; border: 1px solid #E5E7EB; font-weight: 600; background-color: #F9FAFB;">Honest Thread Count</td>
                  <td style="padding: 0.75rem; border: 1px solid #E5E7EB;">300 to 600 TC</td>
              </tr>
              <tr>
                  <td style="padding: 0.75rem; border: 1px solid #E5E7EB; font-weight: 600; background-color: #F9FAFB;">Ply</td>
                  <td style="padding: 0.75rem; border: 1px solid #E5E7EB;">100% Single-Ply</td>
              </tr>
              <tr>
                  <td style="padding: 0.75rem; border: 1px solid #E5E7EB; font-weight: 600; background-color: #F9FAFB;">Fiber</td>
                  <td style="padding: 0.75rem; border: 1px solid #E5E7EB;">Long-staple cotton</td>
              </tr>
          </tbody>
      </table>
      <p style="font-size: 1.15rem; line-height: 1.8; color: #4B5563; text-align: center; margin-top: 3rem; font-weight: 500;">
          Prioritize quality fiber and single-ply construction. Your comfort and durability depend on making an informed choice.
      </p>
    `
  },
  {
    id: 'linen-miracle',
    title: 'Why Linen is the "Air Conditioner" of Fabrics',
    excerpt: 'Derived from flax, linen is naturally hollow. Discover how this ancient fabric regulates your body temperature better than cotton.',
    date: 'Nov 15, 2024',
    readTime: '6 min read',
    category: 'Material Focus',
    image: [percale2],
    featured: false,
    fullContent: `
      <h2 style="font-size: 2.5rem; font-family: serif; color: #1F2937; margin-bottom: 2.5rem; padding-bottom: 0.5rem; font-weight: 700; border-bottom: 3px solid #D1D5DB; cursor: pointer; transition: color 0.4s, transform 0.4s, text-shadow 0.4s;" 
          onmouseover="this.style.color='#14B8A6'; this.style.transform='translateY(-2px)'; this.style.textShadow='0 3px 5px rgba(20, 184, 166, 0.4)'"
          onmouseout="this.style.color='#1F2937'; this.style.transform='translateY(0)'; this.style.textShadow='none'">
          🌬️ Linen: The Natural Air Conditioner of Fabrics
      </h2>
      <p style="font-size: 1.125rem; line-height: 1.8; color: #4B5563; border-left: 5px solid #F3F4F6; padding-left: 15px; font-style: italic;">
          Linen, derived from the flax plant, is arguably the oldest cultivated textile. It is a <strong style="color: #14B8A6; transition: color 0.3s;" onmouseover="this.style.color='#0D9488'" onmouseout="this.style.color='#14B8A6'">high-performance temperature regulator</strong>. If you live in a hot climate or struggle with night sweats, linen transcends luxury—it is a necessity.
      </p>

      <h3 style="font-size: 1.75rem; color: #14B8A6; margin-top: 3rem; margin-bottom: 1rem; border-left: 6px solid #14B8A6; padding-left: 15px; font-weight: 700; cursor: pointer; transition: color 0.3s, transform 0.3s, background-color 0.3s;"
          onmouseover="this.style.color='#0D9488'; this.style.transform='skewX(-1deg) scaleX(1.01)'; this.style.backgroundColor='#F0FDFA'"
          onmouseout="this.style.color='#14B8A6'; this.style.transform='skewX(0) scaleX(1)'; this.style.backgroundColor='transparent'">
          The Anatomy of Flax: A Hollow Core
      </h3>
      <p style="font-size: 1.1rem; line-height: 1.7; color: #374151;">
          Unlike cotton, flax fibers possess a unique, naturally occurring <strong style="color: #0D9488;">hollow core</strong>. This singular trait creates two distinct thermal advantages:
      </p>
      <ul style="list-style-type: none; padding-left: 0; margin-top: 1rem;">
          <li style="margin-bottom: 0.75rem; background-color: #F8FAFF; padding: 1rem 1.5rem; border-radius: 8px; border-left: 5px solid #14B8A6; transition: background-color 0.3s, transform 0.3s; cursor: pointer;"
              onmouseover="this.style.backgroundColor='#E0F2F1'; this.style.transform='translateY(-2px)'"
              onmouseout="this.style.backgroundColor='#F8FAFF'; this.style.transform='translateY(0)'">
              <strong style="color: #14B8A6;">MAXIMUM AIRFLOW:</strong> The porous structure allows air to circulate freely, moving heat away from the body.
          </li>
          <li style="margin-bottom: 0.75rem; background-color: #F8FAFF; padding: 1rem 1.5rem; border-radius: 8px; border-left: 5px solid #14B8A6; transition: background-color 0.3s, transform 0.3s; cursor: pointer;"
              onmouseover="this.style.backgroundColor='#E0F2F1'; this.style.transform='translateY(-2px)'"
              onmouseout="this.style.backgroundColor='#F8FAFF'; this.style.transform='translateY(0)'">
              <strong style="color: #14B8A6;">MOISTURE WICKING:</strong> Acts as a powerful capillary system, quickly drawing sweat away and releasing it into the air.
          </li>
      </ul>

      <h3 style="font-size: 1.75rem; color: #312E81; margin-top: 3rem; margin-bottom: 1rem; border-left: 6px solid #4F46E5; padding-left: 15px; font-weight: 700; cursor: pointer; transition: color 0.3s, transform 0.3s, background-color 0.3s;"
          onmouseover="this.style.color='#6366F1'; this.style.transform='skewX(-1deg) scaleX(1.01)'; this.style.backgroundColor='#F3F4F6'"
          onmouseout="this.style.color='#312E81'; this.style.transform='skewX(0) scaleX(1)'; this.style.backgroundColor='transparent'">
          Longevity, Comfort, and Hypoallergenic Benefits
      </h3>
      <p style="font-size: 1.1rem; line-height: 1.7; color: #374151;">
          Modern linen softens dramatically with every wash without compromising its natural strength or integrity. Key benefits beyond temperature include:
      </p>
      <ul style="list-style-type: none; padding-left: 0; margin-top: 1rem;">
          <li style="margin-bottom: 0.75rem; background-color: #F9FAFB; padding: 1rem 1.5rem; border-radius: 8px; border-left: 4px solid #4F46E5; transition: background-color 0.3s, transform 0.3s; cursor: pointer;"
              onmouseover="this.style.backgroundColor='#EBF4FF'; this.style.transform='scale(1.01)'"
              onmouseout="this.style.backgroundColor='#F9FAFB'; this.style.transform='scale(1)'">
              <strong style="color: #3B82F6;">COOLING POWER:</strong> Can be up to 4 degrees cooler than cotton in peak summer.
          </li>
          <li style="margin-bottom: 0.75rem; background-color: #F9FAFB; padding: 1rem 1.5rem; border-radius: 8px; border-left: 4px solid #4F46E5; transition: background-color 0.3s, transform 0.3s; cursor: pointer;"
              onmouseover="this.style.backgroundColor='#EBF4FF'; this.style.transform='scale(1.01)'"
              onmouseout="this.style.backgroundColor='#F9FAFB'; this.style.transform='scale(1)'">
              <strong style="color: #3B82F6;">WINTER WARMTH:</strong> The hollow fibers act as an excellent insulator, trapping warmth without adding weight.
          </li>
          <li style="margin-bottom: 0.75rem; background-color: #F9FAFB; padding: 1rem 1.5rem; border-radius: 8px; border-left: 4px solid #4F46E5; transition: background-color 0.3s, transform 0.3s; cursor: pointer;"
              onmouseover="this.style.backgroundColor='#EBF4FF'; this.style.transform='scale(1.01)'"
              onmouseout="this.style.backgroundColor='#F9FAFB'; this.style.transform='scale(1)'">
              <strong style="color: #3B82F6;">HYPOALLERGENIC:</strong> Naturally resists bacteria and dust mites, ideal for sensitive sleepers.
          </li>
          <li style="margin-bottom: 0.75rem; background-color: #F9FAFB; padding: 1rem 1.5rem; border-radius: 8px; border-left: 4px solid #4F46E5; transition: background-color 0.3s, transform 0.3s; cursor: pointer;"
              onmouseover="this.style.backgroundColor='#EBF4FF'; this.style.transform='scale(1.01)'"
              onmouseout="this.style.backgroundColor='#F9FAFB'; this.style.transform='scale(1)'">
              <strong style="color: #3B82F6;">LONGEVITY:</strong> Linen fibers are stronger than cotton and built to last for decades.
          </li>
      </ul>

      <h3 style="font-size: 1.75rem; color: #1F2937; margin-top: 3.5rem; margin-bottom: 1.5rem; text-align: center; font-weight: 700; border-bottom: 2px dashed #D1D5DB; padding-bottom: 10px;">
          Own the Look: Embrace the Linen Wrinkle
      </h3>
      <p style="font-size: 1.15rem; line-height: 1.8; color: #4B5563; text-align: center; margin-top: 2rem; font-weight: 500;">
          The beautiful, slightly rumpled look of linen is part of its sophisticated charm. Don't fight the wrinkles; embrace them! They signal the fabric's relaxed, natural structure. Look for pre-washed linen for immediate comfort.
      </p>
      <p style="font-size: 1.2rem; line-height: 1.8; color: #14B8A6; text-align: center; margin-top: 2rem; font-weight: bold; background-color: #F0FDFA; padding: 1.5rem; border-radius: 10px;">
          Switching to linen is a commitment to a cooler, drier, and more restorative night's sleep, year-round.
      </p>
    `
  },
  {
    id: 'color-psychology-sleep',
    title: 'The Psychology of Bedroom Colors',
    excerpt: 'Can blue sheets actually lower your blood pressure? We dive into the science of chromatherapy and how wall/bedding colors affect REM cycles.',
    date: 'Oct 30, 2024',
    readTime: '7 min read',
    category: 'Wellness',
    image: [percale3],
    featured: false,
    fullContent: `
      <h2 style="font-size: 2.5rem; font-family: serif; color: #1F2937; margin-bottom: 2.5rem; padding-bottom: 0.5rem; font-weight: 700; border-bottom: 3px solid #D1D5DB; cursor: pointer; transition: color 0.4s, transform 0.4s, text-shadow 0.4s;" 
          onmouseover="this.style.color='#4F46E5'; this.style.transform='translateY(-2px)'; this.style.textShadow='0 3px 5px rgba(79, 70, 229, 0.4)'"
          onmouseout="this.style.color='#1F2937'; this.style.transform='translateY(0)'; this.style.textShadow='none'">
          🧠 Chromatherapy: Commanding Sleep with Color
      </h2>
      <p style="font-size: 1.125rem; line-height: 1.8; color: #4B5563; border-left: 5px solid #F3F4F6; padding-left: 15px; font-style: italic;">
          Your bedroom color scheme is a powerful tool for controlling mood, stress, and sleep quality. The link between color and emotional response is called <strong style="color: #4F46E5; transition: color 0.3s;" onmouseover="this.style.color='#6366F1'" onmouseout="this.style.color='#4F46E5'">Chromatherapy</strong>. Choosing the right bedding can be the simplest change for profound health benefits.
      </p>

      <h3 style="font-size: 1.75rem; color: #06B6D4; margin-top: 3rem; margin-bottom: 1rem; border-left: 6px solid #06B6D4; padding-left: 15px; font-weight: 700; cursor: pointer; transition: color 0.3s, transform 0.3s, background-color 0.3s;"
          onmouseover="this.style.color='#38BDF8'; this.style.transform='skewX(-1deg) scaleX(1.01)'; this.style.backgroundColor='#F0FDFA'"
          onmouseout="this.style.color='#06B6D4'; this.style.transform='skewX(0) scaleX(1)'; this.style.backgroundColor='transparent'">
          The Calming Spectrum: Colors That Promote Rest
      </h3>
      <p style="font-size: 1.1rem; line-height: 1.7; color: #374151;">
          Cool colors are linked to lower heart rates and blood pressure, signaling the brain to wind down. Prioritize these tones for bedding:
      </p>
      <ul style="list-style-type: none; padding-left: 0; margin-top: 1rem;">
          <li style="margin-bottom: 0.75rem; background-color: #F8FAFF; padding: 1rem 1.5rem; border-radius: 8px; border-left: 5px solid #3B82F6; transition: background-color 0.3s, transform 0.3s; cursor: pointer;"
              onmouseover="this.style.backgroundColor='#EBF4FF'; this.style.transform='scale(1.01)'"
              onmouseout="this.style.backgroundColor='#F8FAFF'; this.style.transform='scale(1)'">
              <strong style="color: #3B82F6;">BLUE (The Champion):</strong> Most soothing color. Promotes tranquility and lowers the heart rate.
          </li>
          <li style="margin-bottom: 0.75rem; background-color: #F8FAFF; padding: 1rem 1.5rem; border-radius: 8px; border-left: 5px solid #14B8A6; transition: background-color 0.3s, transform 0.3s; cursor: pointer;"
              onmouseover="this.style.backgroundColor='#E0F2F1'; this.style.transform='scale(1.01)'"
              onmouseout="this.style.backgroundColor='#F8FAFF'; this.style.transform='scale(1)'">
              <strong style="color: #0D9488;">GREEN (Tranquilizer):</strong> Invokes nature and harmony, effectively reducing anxiety.
          </li>
          <li style="margin-bottom: 0.75rem; background-color: #F8FAFF; padding: 1rem 1.5rem; border-radius: 8px; border-left: 5px solid #9CA3AF; transition: background-color 0.3s, transform 0.3s; cursor: pointer;"
              onmouseover="this.style.backgroundColor='#F3F4F6'; this.style.transform='scale(1.01)'"
              onmouseout="this.style.backgroundColor='#F8FAFF'; this.style.transform='scale(1)'">
              <strong style="color: #4B5563;">WHITE & CREAM (Clean Slate):</strong> Reduces visual distraction. Use warm tones for a cozier feel.
          </li>
      </ul>

      <h3 style="font-size: 1.75rem; color: #DC2626; margin-top: 3rem; margin-bottom: 1rem; border-left: 6px solid #DC2626; padding-left: 15px; font-weight: 700; cursor: pointer; transition: color 0.3s, transform 0.3s, background-color 0.3s;"
          onmouseover="this.style.color='#B91C1C'; this.style.transform='skewX(-1deg) scaleX(1.01)'; this.style.backgroundColor='#FFF7F7'"
          onmouseout="this.style.color='#DC2626'; this.style.transform='skewX(0) scaleX(1)'; this.style.backgroundColor='transparent'">
          The Activating Spectrum: Colors to Avoid
      </h3>
      <p style="font-size: 1.1rem; line-height: 1.7; color: #374151;">
          These colors stimulate the mind and can actively impede the process of falling asleep. Use them sparingly as accents.
      </p>
      <ul style="list-style-type: none; padding-left: 0; margin-top: 1rem;">
          <li style="margin-bottom: 0.75rem; background-color: #F8FAFF; padding: 1rem 1.5rem; border-radius: 8px; border-left: 5px solid #EF4444; transition: background-color 0.3s, transform 0.3s; cursor: pointer;"
              onmouseover="this.style.backgroundColor='#FEE2E2'; this.style.transform='scale(1.01)'"
              onmouseout="this.style.backgroundColor='#F8FAFF'; this.style.transform='scale(1)'">
              <strong style="color: #B91C1C;">RED:</strong> Highly stimulating. Linked to excitement and increased heart rate.
          </li>
          <li style="margin-bottom: 0.75rem; background-color: #F8FAFF; padding: 1rem 1.5rem; border-radius: 8px; border-left: 5px solid #F59E0B; transition: background-color 0.3s, transform 0.3s; cursor: pointer;"
              onmouseover="this.style.backgroundColor='#FEF3C7'; this.style.transform='scale(1.01)'"
              onmouseout="this.style.backgroundColor='#F8FAFF'; this.style.transform='scale(1)'">
              <strong style="color: #D97706;">BRIGHT YELLOW:</strong> Energetic and over-stimulating, potentially causing frustration.
          </li>
          <li style="margin-bottom: 0.75rem; background-color: #F8FAFF; padding: 1rem 1.5rem; border-radius: 8px; border-left: 5px solid #8B5CF6; transition: background-color 0.3s, transform 0.3s; cursor: pointer;"
              onmouseover="this.style.backgroundColor='#EDE9FE'; this.style.transform='scale(1.01)'"
              onmouseout="this.style.backgroundColor='#F8FAFF'; this.style.transform='scale(1)'">
              <strong style="color: #7C3AED;">BRIGHT PURPLE:</strong> Associated with creativity and keeping the brain active.
          </li>
      </ul>

      <h3 style="font-size: 1.75rem; color: #1F2937; margin-top: 3.5rem; margin-bottom: 1.5rem; text-align: center; font-weight: 700; border-bottom: 2px dashed #D1D5DB; padding-bottom: 10px;">
          Applying Color Science to Your Bedding
      </h3>
      <table style="width: 100%; border-collapse: collapse; margin-top: 1.5rem; font-size: 0.95rem; border: 1px solid #D1D5DB; border-radius: 8px; overflow: hidden; box-shadow: 0 4px 6px rgba(0,0,0,0.05);">
          <thead>
              <tr style="background-color: #F3F4F6;">
                  <th style="padding: 1rem; border: 1px solid #E5E7EB; text-align: left; color: #1F2937; font-size: 1rem; font-weight: 700;">Sleep Goal</th>
                  <th style="padding: 1rem; border: 1px solid #E5E7EB; text-align: left; color: #4F46E5; font-size: 1rem; font-weight: 700;">Recommended Color</th>
              </tr>
          </thead>
          <tbody>
              <tr style="transition: background-color 0.3s;" onmouseover="this.style.backgroundColor='#F5F7FF'" onmouseout="this.style.backgroundColor='white'">
                  <td style="padding: 0.75rem; border: 1px solid #E5E7EB; font-weight: 600; background-color: #F9FAFB;">Reduce Anxiety/Stress</td>
                  <td style="padding: 0.75rem; border: 1px solid #E5E7EB; color: #3B82F6;">Dusty Blue, Sage Green, Lavender</td>
              </tr>
              <tr style="transition: background-color 0.3s;" onmouseover="this.style.backgroundColor='#F5F7FF'" onmouseout="this.style.backgroundColor='white'">
                  <td style="padding: 0.75rem; border: 1px solid #E5E7EB; font-weight: 600; background-color: #F9FAFB;">Cozy & Safe Feel</td>
                  <td style="padding: 0.75rem; border: 1px solid #E5E7EB; color: #A1A1AF;">Warm Gray, Oatmeal, Cream</td>
              </tr>
              <tr style="transition: background-color 0.3s;" onmouseover="this.style.backgroundColor='#F5F7FF'" onmouseout="this.style.backgroundColor='white'">
                  <td style="padding: 0.75rem; border: 1px solid #E5E7EB; font-weight: 600; background-color: #F9FAFB;">Promote Restoration</td>
                  <td style="padding: 0.75rem; border: 1px solid #E5E7EB; color: #1F2937;">Deep Indigo, Charcoal, Soft Navy</td>
              </tr>
          </tbody>
      </table>

      <p style="font-size: 1.15rem; line-height: 1.8; color: #4B5563; text-align: center; margin-top: 3.5rem; font-weight: 500;">
          <strong style="color: #4F46E5;">Final Takeaway:</strong> When choosing sheets, you are not just decorating; you are scientifically setting the stage for deep, restorative sleep.
      </p>
    `
  },
  {
    id: 'mattress-protector-science',
    title: 'The Invisible Shield: Why You Need Protectors',
    excerpt: 'It’s not just for spills. Learn how a simple protector prevents dust mites, allergens, and skin cells from ruining your expensive mattress.',
    date: 'Oct 10, 2024',
    readTime: '3 min read',
    category: 'Hygiene',
    image: [percale4],
    featured: false,
    fullContent: `
      <h2 style="font-size: 2.5rem; font-family: serif; color: #1F2937; margin-bottom: 2.5rem; padding-bottom: 0.5rem; font-weight: 700; border-bottom: 3px solid #D1D5DB; cursor: pointer; transition: color 0.4s, transform 0.4s, text-shadow 0.4s;" 
          onmouseover="this.style.color='#14B8A6'; this.style.transform='translateY(-2px)'; this.style.textShadow='0 3px 5px rgba(20, 184, 166, 0.4)'"
          onmouseout="this.style.color='#1F2937'; this.style.transform='translateY(0)'; this.style.textShadow='none'">
          🛡️ The Invisible Shield: Why You Need a Protector
      </h2>
      <p style="font-size: 1.125rem; line-height: 1.8; color: #4B5563; border-left: 5px solid #F3F4F6; padding-left: 15px; font-style: italic;">
          A mattress protector is the single most critical investment to safeguard the hygiene and longevity of your sleep environment. It protects your expensive mattress from the invisible threats that degrade its quality over time.
      </p>

      <h3 style="font-size: 1.75rem; color: #DC2626; margin-top: 3rem; margin-bottom: 1rem; border-left: 6px solid #DC2626; padding-left: 15px; font-weight: 700; cursor: pointer; transition: color 0.3s, transform 0.3s, background-color 0.3s;"
          onmouseover="this.style.color='#B91C1C'; this.style.transform='skewX(-1deg) scaleX(1.01)'; this.style.backgroundColor='#FFF7F7'"
          onmouseout="this.style.color='#DC2626'; this.style.transform='skewX(0) scaleX(1)'; this.style.backgroundColor='transparent'">
          Protecting Your Investment: The Hygiene Barrier
      </h3>
      <p style="font-size: 1.1rem; line-height: 1.7; color: #374151;">
          Every night, your body sheds organic material. The protector creates an essential, impenetrable barrier against these three major threats:
      </p>
      <ul style="list-style-type: none; padding-left: 0; margin-top: 1rem;">
          <li style="margin-bottom: 0.75rem; background-color: #F8FAFF; padding: 1rem 1.5rem; border-radius: 8px; border-left: 5px solid #EF4444; transition: background-color 0.3s, transform 0.3s; cursor: pointer;"
              onmouseover="this.style.backgroundColor='#FEE2E2'; this.style.transform='scale(1.01)'"
              onmouseout="this.style.backgroundColor='#F8FAFF'; this.style.transform='scale(1)'">
              <strong style="color: #B91C1C;">DUST MITES & ALLERGENS:</strong> Seals off the mattress, starving dust mites and dramatically reducing allergy triggers.
          </li>
          <li style="margin-bottom: 0.75rem; background-color: #F8FAFF; padding: 1rem 1.5rem; border-radius: 8px; border-left: 5px solid #F59E0B; transition: background-color 0.3s, transform 0.3s; cursor: pointer;"
              onmouseover="this.style.backgroundColor='#FEF3C7'; this.style.transform='scale(1.01)'"
              onmouseout="this.style.backgroundColor='#F8FAFF'; this.style.transform='scale(1)'">
              <strong style="color: #D97706;">SWEAT & BODY OILS:</strong> Prevents moisture from seeping in, inhibiting mold, mildew, and bacteria growth.
          </li>
          <li style="margin-bottom: 0.75rem; background-color: #F8FAFF; padding: 1rem 1.5rem; border-radius: 8px; border-left: 5px solid #4F46E5; transition: background-color 0.3s, transform 0.3s; cursor: pointer;"
              onmouseover="this.style.backgroundColor='#EBF4FF'; this.style.transform='scale(1.01)'"
              onmouseout="this.style.backgroundColor='#F8FAFF'; this.style.transform='scale(1)'">
              <strong style="color: #3B82F6;">WARRANTY INSURANCE:</strong> Prevents fluids and stains that typically void your expensive mattress warranty.
          </li>
      </ul>

      <h3 style="font-size: 1.75rem; color: #14B8A6; margin-top: 3rem; margin-bottom: 1rem; border-left: 6px solid #14B8A6; padding-left: 15px; font-weight: 700; cursor: pointer; transition: color 0.3s, transform 0.3s, background-color 0.3s;"
          onmouseover="this.style.color='#0D9488'; this.style.transform='skewX(-1deg) scaleX(1.01)'; this.style.backgroundColor='#F0FDFA'"
          onmouseout="this.style.color='#14B8A6'; this.style.transform='skewX(0) scaleX(1)'; this.style.backgroundColor='transparent'">
          Myth Busting: Hot and Crinkly is the Past
      </h3>
      <p style="font-size: 1.1rem; line-height: 1.7; color: #374151;">
          Modern protectors utilize advanced technology to ensure silent, cool, and breathable performance:
      </p>
      <ul style="list-style-type: none; padding-left: 0; margin-top: 1rem;">
          <li style="margin-bottom: 0.75rem; background-color: #F9FAFB; padding: 1rem 1.5rem; border-radius: 8px; border-left: 5px solid #14B8A6; transition: background-color 0.3s, transform 0.3s; cursor: pointer;"
              onmouseover="this.style.backgroundColor='#E0F2F1'; this.style.transform='scale(1.01)'"
              onmouseout="this.style.backgroundColor='#F9FAFB'; this.style.transform='scale(1)'">
              <strong style="color: #0D9488;">BREATHABLE TECH:</strong> Microscopic membranes block liquid but allow air to pass through, keeping you cool.
          </li>
          <li style="margin-bottom: 0.75rem; background-color: #F9FAFB; padding: 1rem 1.5rem; border-radius: 8px; border-left: 5px solid #14B8A6; transition: background-color 0.3s, transform 0.3s; cursor: pointer;"
              onmouseover="this.style.backgroundColor='#E0F2F1'; this.style.transform='scale(1.01)'"
              onmouseout="this.style.backgroundColor='#F9FAFB'; this.style.transform='scale(1)'">
              <strong style="color: #0D9488;">SOFT SURFACES:</strong> Made with Tencel or cotton surfaces for a feel identical to a fitted sheet.
          </li>
      </ul>

      <p style="font-size: 1.15rem; line-height: 1.8; color: #4B5563; text-align: center; margin-top: 3.5rem; font-weight: 500;">
          <strong style="color: #14B8A6;">The Lifespan Factor:</strong> By washing your protector regularly, you guarantee a cleaner, longer life for your mattress, potentially saving thousands in replacement costs.
      </p>
    `
  },
  
  {
    id: 'pillow-talk',
    title: 'Side, Back, or Stomach? Choosing the Right Pillow',
    excerpt: 'Your neck alignment depends entirely on your sleeping position. We break down the ideal loft and firmness for every sleeper type.',
    date: 'Sep 22, 2024',
    readTime: '5 min read',
    category: 'Ergonomics',
    image: [percale5],
    featured: false,
    fullContent: `
      <h2 style="font-size: 2.5rem; font-family: serif; color: #1F2937; margin-bottom: 2.5rem; padding-bottom: 0.5rem; font-weight: 700; border-bottom: 3px solid #D1D5DB; cursor: pointer; transition: color 0.4s, transform 0.4s, text-shadow 0.4s;" 
          onmouseover="this.style.color='#F59E0B'; this.style.transform='translateY(-2px) rotate(0.5deg)'"
          onmouseout="this.style.color='#1F2937'; this.style.transform='translateY(0) rotate(0deg)'">
          📐 Pillow Talk: Choosing By Sleeping Position
      </h2>
      <p style="font-size: 1.125rem; line-height: 1.8; color: #4B5563; border-left: 5px solid #F3F4F6; padding-left: 15px; font-style: italic;">
          A pillow is essential ergonomic equipment. Its job is to maintain the <strong style="color: #F59E0B; transition: color 0.3s;" onmouseover="this.style.color='#D97706'" onmouseout="this.style.color='#F59E0B'">neutral alignment</strong> of your head, neck, and spine. Your perfect pillow is dictated entirely by your natural sleeping position.
      </p>

      <h3 style="font-size: 1.75rem; color: #F59E0B; margin-top: 3rem; margin-bottom: 1rem; border-left: 6px solid #FCD34D; padding-left: 15px; font-weight: 700; cursor: pointer; transition: color 0.3s, transform 0.3s, background-color 0.3s;"
          onmouseover="this.style.color='#D97706'; this.style.transform='skewX(-1deg) scaleX(1.01)'; this.style.backgroundColor='#FFFBEB'"
          onmouseout="this.style.color='#F59E0B'; this.style.transform='skewX(0) scaleX(1)'; this.style.backgroundColor='transparent'">
          Position 1: The Side Sleeper (High Loft Needed)
      </h3>
      <p style="font-size: 1.1rem; line-height: 1.7; color: #374151;">
          Side sleepers have the largest gap to fill (the width of the shoulder). Filling this space is crucial to prevent neck bending and resulting pain.
      </p>
      <ul style="list-style-type: none; padding-left: 0; margin-top: 1rem;">
          <li style="margin-bottom: 0.75rem; background-color: #F9FAFB; padding: 1rem 1.5rem; border-radius: 8px; border-left: 5px solid #F59E0B; transition: background-color 0.3s, transform 0.3s; cursor: pointer;"
              onmouseover="this.style.backgroundColor='#FEF3C7'; this.style.transform='scale(1.01)'"
              onmouseout="this.style.backgroundColor='#F9FAFB'; this.style.transform='scale(1)'">
              <strong style="color: #D97706;">LOFT:</strong> High to Medium-High.
          </li>
          <li style="margin-bottom: 0.75rem; background-color: #F9FAFB; padding: 1rem 1.5rem; border-radius: 8px; border-left: 5px solid #F59E0B; transition: background-color 0.3s, transform 0.3s; cursor: pointer;"
              onmouseover="this.style.backgroundColor='#FEF3C7'; this.style.transform='scale(1.01)'"
              onmouseout="this.style.backgroundColor='#F9FAFB'; this.style.transform='scale(1)'">
              <strong style="color: #D97706;">FIRMNESS:</strong> Medium to Firm (must hold shape).
          </li>
          <li style="margin-bottom: 0.75rem; background-color: #F9FAFB; padding: 1rem 1.5rem; border-radius: 8px; border-left: 5px solid #F59E0B; transition: background-color 0.3s, transform 0.3s; cursor: pointer;"
              onmouseover="this.style.backgroundColor='#FEF3C7'; this.style.transform='scale(1.01)'"
              onmouseout="this.style.backgroundColor='#F9FAFB'; this.style.transform='scale(1)'">
              <strong style="color: #D97706;">FILL:</strong> Firm memory foam or dense down alternative.
          </li>
      </ul>

      <h3 style="font-size: 1.75rem; color: #3B82F6; margin-top: 3rem; margin-bottom: 1rem; border-left: 6px solid #60A5FA; padding-left: 15px; font-weight: 700; cursor: pointer; transition: color 0.3s, transform 0.3s, background-color 0.3s;"
          onmouseover="this.style.color='#2563EB'; this.style.transform='skewX(-1deg) scaleX(1.01)'; this.style.backgroundColor='#F0F9FF'"
          onmouseout="this.style.color='#3B82F6'; this.style.transform='skewX(0) scaleX(1)'; this.style.backgroundColor='transparent'">
          Position 2: The Back Sleeper (Medium Loft Needed)
      </h3>
      <p style="font-size: 1.1rem; line-height: 1.7; color: #374151;">
          Back sleepers require minimal support, focusing only on the natural curve of the neck. Too firm pushes the head forward.
      </p>
      <ul style="list-style-type: none; padding-left: 0; margin-top: 1rem;">
          <li style="margin-bottom: 0.75rem; background-color: #F9FAFB; padding: 1rem 1.5rem; border-radius: 8px; border-left: 5px solid #3B82F6; transition: background-color 0.3s, transform 0.3s; cursor: pointer;"
              onmouseover="this.style.backgroundColor='#EBF4FF'; this.style.transform='scale(1.01)'"
              onmouseout="this.style.backgroundColor='#F9FAFB'; this.style.transform='scale(1)'">
              <strong style="color: #3B82F6;">LOFT:</strong> Medium to Low.
          </li>
          <li style="margin-bottom: 0.75rem; background-color: #F9FAFB; padding: 1rem 1.5rem; border-radius: 8px; border-left: 5px solid #3B82F6; transition: background-color 0.3s, transform 0.3s; cursor: pointer;"
              onmouseover="this.style.backgroundColor='#EBF4FF'; this.style.transform='scale(1.01)'"
              onmouseout="this.style.backgroundColor='#F9FAFB'; this.style.transform='scale(1)'">
              <strong style="color: #3B82F6;">FIRMNESS:</strong> Medium to Soft.
          </li>
          <li style="margin-bottom: 0.75rem; background-color: #F9FAFB; padding: 1rem 1.5rem; border-radius: 8px; border-left: 5px solid #3B82F6; transition: background-color 0.3s, transform 0.3s; cursor: pointer;"
              onmouseover="this.style.backgroundColor='#EBF4FF'; this.style.transform='scale(1.01)'"
              onmouseout="this.style.backgroundColor='#F9FAFB'; this.style.transform='scale(1)'">
              <strong style="color: #3B82F6;">FILL:</strong> Shredded memory foam or low-density micro-fiber.
          </li>
      </ul>

      <h3 style="font-size: 1.75rem; color: #14B8A6; margin-top: 3rem; margin-bottom: 1rem; border-left: 6px solid #14B8A6; padding-left: 15px; font-weight: 700; cursor: pointer; transition: color 0.3s, transform 0.3s, background-color 0.3s;"
          onmouseover="this.style.color='#0D9488'; this.style.transform='skewX(-1deg) scaleX(1.01)'; this.style.backgroundColor='#F0FDFA'"
          onmouseout="this.style.color='#14B8A6'; this.style.transform='skewX(0) scaleX(1)'; this.style.backgroundColor='transparent'">
          Position 3: The Stomach Sleeper (Lowest Loft Needed)
      </h3>
      <p style="font-size: 1.1rem; line-height: 1.7; color: #374151;">
          Stomach sleeping is the least recommended position. The goal is to minimize the neck turn angle as much as possible.
      </p>
      <ul style="list-style-type: none; padding-left: 0; margin-top: 1rem;">
          <li style="margin-bottom: 0.75rem; background-color: #F9FAFB; padding: 1rem 1.5rem; border-radius: 8px; border-left: 5px solid #14B8A6; transition: background-color 0.3s, transform 0.3s; cursor: pointer;"
              onmouseover="this.style.backgroundColor='#E0F2F1'; this.style.transform='scale(1.01)'"
              onmouseout="this.style.backgroundColor='#F9FAFB'; this.style.transform='scale(1)'">
              <strong style="color: #0D9488;">LOFT:</strong> Very Low/Flat (often no pillow is best).
          </li>
          <li style="margin-bottom: 0.75rem; background-color: #F9FAFB; padding: 1rem 1.5rem; border-radius: 8px; border-left: 5px solid #14B8A6; transition: background-color 0.3s, transform 0.3s; cursor: pointer;"
              onmouseover="this.style.backgroundColor='#E0F2F1'; this.style.transform='scale(1.01)'"
              onmouseout="this.style.backgroundColor='#F9FAFB'; this.style.transform='scale(1)'">
              <strong style="color: #0D9488;">FIRMNESS:</strong> Soft.
          </li>
          <li style="margin-bottom: 0.75rem; background-color: #F9FAFB; padding: 1rem 1.5rem; border-radius: 8px; border-left: 5px solid #14B8A6; transition: background-color 0.3s, transform 0.3s; cursor: pointer;"
              onmouseover="this.style.backgroundColor='#E0F2F1'; this.style.transform='scale(1.01)'"
              onmouseout="this.style.backgroundColor='#F9FAFB'; this.style.transform='scale(1)'">
              <strong style="color: #0D9488;">FILL:</strong> Very thin down or soft feather.
          </li>
      </ul>

      <p style="font-size: 1.15rem; line-height: 1.8; color: #4B5563; text-align: center; margin-top: 3.5rem; font-weight: 500; border: 1px solid #D1D5DB; padding: 1rem; border-radius: 8px; background-color: #F3F4F6;">
          <strong style="color: #312E81;">COMBINATION SLEEPERS:</strong> Look for easily moldable or adjustable fills, like shredded memory foam, to accommodate changing positions.
      </p>
    `
  }
];

const Blog = () => {
  const featuredPost = blogPosts.find(post => post.featured);
  const otherPosts = blogPosts.filter(post => !post.featured);

  return (
    <div className="bg-white min-h-screen pt-12 pb-24 font-sans text-gray-900">
      
      {/* --- HEADER --- */}
      <div className="text-center mb-16 px-6">
        <span className="text-xs font-bold tracking-[0.2em] text-gray-400 uppercase mb-3 block">The Journal</span>
        <h1 className="text-5xl md:text-6xl font-serif text-black mb-6">Sleep Science & Design</h1>
        <div className="w-16 h-1 bg-black mx-auto mb-6"></div>
        <p className="text-gray-500 max-w-2xl mx-auto text-lg leading-relaxed font-light">
          Deep dives into fabric technology, sleep wellness, and interior aesthetics. <br className="hidden md:block"/> Because better sleep is a science.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        
        {/* --- 1. FEATURED ARTICLE (Hero Style) --- */}
        {featuredPost && (
          <Link to={`/blog/${featuredPost.id}`} className="group block mb-20 relative overflow-hidden rounded-3xl shadow-sm hover:shadow-xl transition-all duration-500">
            <div className="relative h-[60vh] w-full">
               <img src={featuredPost.image} alt={featuredPost.title} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
               <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
               
               <div className="absolute bottom-0 left-0 p-8 md:p-12 w-full md:w-2/3">
                  <span className="bg-white text-black px-3 py-1 rounded text-xs font-bold uppercase tracking-widest mb-4 inline-block">
                    {featuredPost.category}
                  </span>
                  <h2 className="text-3xl md:text-5xl font-serif text-white mb-4 leading-tight group-hover:text-gray-200 transition-colors">
                    {featuredPost.title}
                  </h2>
                  <p className="text-white/80 text-lg mb-6 line-clamp-2">
                    {featuredPost.excerpt}
                  </p>
                  
                  <div className="flex items-center gap-6 text-sm text-white/70 font-medium">
                     <span className="flex items-center gap-2"><Calendar size={14}/> {featuredPost.date}</span>
                     <span className="flex items-center gap-2"><Clock size={14}/> {featuredPost.readTime}</span>
                     <span className="flex items-center gap-2 text-white font-bold ml-auto md:ml-0 group-hover:translate-x-2 transition-transform">
                        Read Article <ArrowRight size={16}/>
                     </span>
                  </div>
               </div>
            </div>
          </Link>
        )}

        {/* --- 2. GRID ARTICLES --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
          {otherPosts.map((post) => (
            <Link key={post.id} to={`/blog/${post.id}`} className="group flex flex-col h-full">
              
              {/* Image */}
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl mb-5 bg-gray-100">
                 <img src={post.image} alt={post.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                 <div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1 rounded text-[10px] font-bold uppercase tracking-widest text-gray-800">
                    {post.category}
                 </div>
              </div>

              {/* Content */}
              <div className="flex-1 flex flex-col">
                 <div className="flex items-center gap-4 text-xs text-gray-400 font-medium mb-3">
                    <span>{post.date}</span>
                    <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
                    <span>{post.readTime}</span>
                 </div>
                 
                 <h3 className="text-xl font-serif font-bold text-gray-900 mb-3 leading-snug group-hover:text-gray-600 transition-colors">
                    {post.title}
                 </h3>
                 
                 <p className="text-gray-500 text-sm leading-relaxed mb-4 line-clamp-3 flex-1">
                    {post.excerpt}
                 </p>
                 
                 <span className="text-sm font-bold text-black border-b border-black/20 pb-0.5 w-fit group-hover:border-black transition-all flex items-center gap-2">
                    Read More <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform"/>
                 </span>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Blog;
export { blogPosts }; // Export data for BlogPost.jsx