addSubDomain({
  description: "DMARC record",
  domain: "is-a.tech",
  subdomain: "_dmarc",
  owner: {
    repo: "https://github.com/gantit/free-domains",
  },
  record: {
    TXT: ["v=DMARC1; p=reject; sp=reject; adkim=s; aspf=s;"],
  },
});
