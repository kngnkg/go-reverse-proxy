FROM node:19.8

WORKDIR /workspace/webapp

# 証明書をインストール
COPY cert/localhost.pem /usr/local/share/ca-certificates/localhost.crt
RUN update-ca-certificates

RUN npm install -g npm@latest

CMD ["npm", "run", "dev"]
