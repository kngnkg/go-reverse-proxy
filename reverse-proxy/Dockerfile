FROM golang:1.20.3

ENV GO111MODULE on

WORKDIR /workspace/reverse-proxy

# 開発用のgoの各種ツールをインストール
RUN go install github.com/uudashr/gopkgs/v2/cmd/gopkgs@latest && \
    go install github.com/go-delve/delve/cmd/dlv@latest && \
    go install github.com/ramya-rao-a/go-outline@latest && \
    go install github.com/stamblerre/gocode@latest && \
    go install golang.org/x/tools/gopls@latest && \
    go install honnef.co/go/tools/cmd/staticcheck@latest && \
    go install github.com/cosmtrek/air@latest

# CMD ["go", "run", "main.go"]
CMD ["air", "-c", ".air.toml"]
