package main

import (
	"log"
	"net/http"
	"net/http/httputil"
	"strconv"
	"sync"
)

func runProxyServer(port int, forwardHost string) {
	director := func(request *http.Request) {
		request.URL.Scheme = "http"
		request.URL.Host = forwardHost
	}

	rp := &httputil.ReverseProxy{Director: director}
	server := http.Server{
		Addr:    ":" + strconv.Itoa(port),
		Handler: rp,
	}

	if err := server.ListenAndServeTLS("../cert/localhost.pem", "../cert/localhost-key.pem"); err != nil {
		log.Fatal(err.Error())
	}
}

func main() {
	var wg sync.WaitGroup

	wg.Add(2)

	go func() {
		runProxyServer(443, "api:8080")
		wg.Done()
	}()

	go func() {
		runProxyServer(444, "webapp:3000")
		wg.Done()
	}()

	wg.Wait()
}
