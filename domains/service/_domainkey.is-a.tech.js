addSubDomain({
  description: "DKIM record",
  domain: "is-a.tech",
  subdomain: "*._domainkey",
  owner: {
    repo: "https://github.com/gantit/free-domains",
  },
  record: {
    TXT: ["v=DKIM1; p="],
  },
});
