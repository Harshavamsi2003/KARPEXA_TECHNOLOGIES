import { partnerGroups } from '../data/content';

/**
 * Partner ecosystem — one continuous, always-moving logo belt per
 * category. No cards, no boxes: just the marks, evenly spaced, gliding
 * left forever at a single uniform speed.
 *
 * Seamlessness (the important bit):
 *   Each row renders exactly TWO copies of a padded base set and slides
 *   by precisely -50%. When the first copy has fully left, the second is
 *   already sitting exactly where the first began — so the loop restarts
 *   with zero jump. Repetition inside a row is expected and fine here;
 *   what matters is that it never stutters or resets visibly.
 *
 * Uniformity:
 *   Every row moves the SAME direction at the SAME per-logo speed, so a
 *   4-logo row and a 7-logo row travel at an identical physical pace and
 *   the whole wall reads as one calm, coordinated system.
 */

// Seconds of travel per logo slot — identical for every row, so speed is
// uniform regardless of how many logos a category has. Unhurried, premium.
const SECONDS_PER_LOGO = 3.4;

// Minimum logos in a row's base set before it is cloned. Short categories
// (4 logos) get padded by repeating their own list so the base set is
// always wide enough to span even an ultra-wide screen with no gaps.
const MIN_BASE = 8;

function buildBase(items) {
  if (items.length >= MIN_BASE) return items;
  const out = [];
  while (out.length < MIN_BASE) out.push(...items);
  return out;
}

export default function Partners() {
  return (
    <div className="pfield" role="list" aria-label="Technology partners and customers">
      {partnerGroups.map((group) => {
        const base = buildBase(group.items);
        // Two identical copies → slide -50% → seamless loop.
        const belt = [...base, ...base];
        const duration = (base.length * SECONDS_PER_LOGO).toFixed(1);

        return (
          <div className="pfield__group" role="listitem" key={group.label}>
            <div className="pfield__rail">
              <span className="pfield__bar" aria-hidden="true" />
              <span className="pfield__label">{group.label}</span>
            </div>

            <div className="pfield__track">
              <div className="pfield__marquee" style={{ '--dur': `${duration}s` }}>
                {belt.map((p, idx) => (
                  <div
                    className="plogo"
                    key={`${group.label}-${p.name}-${idx}`}
                    title={p.name}
                    aria-hidden={idx >= base.length ? 'true' : undefined}
                  >
                    <img
                      src={p.logo}
                      alt={idx < base.length ? `${p.name} logo` : ''}
                      loading="lazy"
                      decoding="async"
                      draggable="false"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}