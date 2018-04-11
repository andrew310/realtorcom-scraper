APP_NAME ?= "realtorcom"

P="\\033[34m[+]\\033[0m"

build:
	@echo "  $(P) build"
	@ docker build -t $(APP_NAME) .
.PHONY: build

run:
	@echo "  $(P) run"
	@ docker run -i --rm --cap-add=SYS_ADMIN --name reaper $(APP_NAME)
.PHONY: run