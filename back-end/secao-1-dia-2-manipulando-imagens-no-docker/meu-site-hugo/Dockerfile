# Primeiro Estágio

# imagem:tag
FROM alpine:3.14 AS primeiro-estagio

# Criar um diretório onde ocorrerão os trabalhos
WORKDIR /site

# caminho_para_arquivo_copiado caminho_para_onde_arquivo_vai
COPY config.toml config.toml
COPY index.html /site/layouts/index.html
COPY _index.md /site/content/_index.md

# Run roda na construção da imagem
RUN apk add hugo
RUN hugo --minify --gc

# Segundo Estágio
FROM nginx:1.21-alpine AS segundo-estagio
COPY --from=primeiro-estagio /site/public/ /usr/share/nginx/html
ENTRYPOINT ["nginx", "-g", "daemon off;"]