help:
	@echo "USAGE: make [help|deploy]"

deploy: 
	boot prod
	ghp-import -p resources/public
