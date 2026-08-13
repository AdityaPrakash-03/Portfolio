"use client";

import { certifications } from "@/data/certifications";
import { useState } from "react";
import { ChevronDown, ExternalLink } from "lucide-react";

export default function SignalsPanel() {
  const [showMore, setShowMore] = useState(false);
  const primary = certifications.filter((c) => c.tier <= 2);
  const secondary = certifications.filter((c) => c.tier === 3);

  return (
    <div className="space-y-4">
      {primary.map((cert) => (
        <CertCard key={cert.title} cert={cert} />
      ))}

      {secondary.length > 0 && (
        <div className="pt-2">
          <button
            onClick={() => setShowMore(!showMore)}
            className="flex items-center gap-1.5 text-sm font-mono-label text-charcoal-soft hover:text-accent transition-colors"
          >
            {showMore ? "SHOW LESS" : `SHOW ${secondary.length} MORE`}
            <ChevronDown
              size={14}
              className={`transition-transform ${showMore ? "rotate-180" : ""}`}
            />
          </button>
          {showMore && (
            <div className="space-y-4 mt-4">
              {secondary.map((cert) => (
                <CertCard key={cert.title} cert={cert} />
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}

function CertCard({
  cert,
}: {
  cert: (typeof certifications)[number];
}) {
  return (
    <div className="border border-border rounded-xl p-4 hover:border-accent/40 transition-colors">
      <div className="flex items-start justify-between gap-3">
        <div>
          <h4 className="font-medium text-charcoal text-sm">{cert.title}</h4>
          <p className="text-xs text-charcoal-soft mt-0.5">
            {cert.issuer} · {cert.issuedDate}
          </p>
        </div>
        {cert.credentialUrl ? (
          <a
            href={cert.credentialUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 text-accent hover:text-accent/70 transition-colors"
            aria-label={`View credential for ${cert.title}`}
          >
            <ExternalLink size={16} />
          </a>
        ) : null}
      </div>
      {cert.note && (
        <p className="text-xs text-charcoal-soft mt-2 leading-relaxed">
          {cert.note}
        </p>
      )}
    </div>
  );
}
