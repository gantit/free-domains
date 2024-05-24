addSubDomain({
  description: "Root domain",
  domain: "is-a.tech",
  subdomain: "@",
  owner: {
    repo: "https://github.com/gantit/free-domains",
  },
  record: {
    TXT: ["v=spf1 -all"],
    A: [
      "185.199.108.153",
      "185.199.109.153",
      "185.199.110.153",
      "185.199.111.153",
    ],
    AAAA: [
      "2606:50c0:8000::153",
      "2606:50c0:8001::153",
      "2606:50c0:8002::153",
      "2606:50c0:8003::153",
    ],
  },
  proxy: false,
});
