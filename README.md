# 📍 Address Lookup System - API Integration & jQuery

Este projeto é uma ferramenta de automação de formulário que utiliza a API **ViaCEP** para buscar endereços automaticamente a partir do CEP informado. Ele foca em melhorar a **Experiência do Usuário (UX)**, reduzindo o esforço de digitação e garantindo a integridade dos dados.

---

# 📝 Resumo (Resume)
A aplicação utiliza **jQuery** para manipular o DOM e realizar requisições assíncronas (**AJAX**). Ao digitar o CEP, o sistema consulta um endpoint externo e preenche os campos de endereço instantaneamente. Além disso, implementei feedbacks visuais de carregamento (*spinners*) e tratamento de erros com blocos `try/catch/finally` para garantir que a interface nunca fique travada para o usuário.



## 🚀 Tecnologias e Recursos (Tech Stack)

[![jQuery](https://img.shields.io/badge/jQuery-000?style=for-the-badge&logo=jquery&logoColor=4F0199)](https://jquery.com/)
[![Bootstrap](https://img.shields.io/badge/Bootstrap-000?style=for-the-badge&logo=bootstrap&logoColor=4F0199)](https://getbootstrap.com/)
[![API](https://img.shields.io/badge/ViaCEP-API-000?style=for-the-badge&logo=json&logoColor=4F0199)](https://viacep.com.br/)

## 📋 Funcionalidades em Destaque
* **Consumo de API REST:** Uso de `$.ajax` para buscar dados estruturados em formato JSON.
* **Máscaras de Input:** Integração com `jquery.mask` para garantir que o CEP seja digitado no formato correto (`00000-000`).
* **Feedback de Interface:** Alternância dinâmica de ícones por *spinners* de carregamento durante a requisição assíncrona.
* **Tratamento de Exceções:** Uso de `Error handling` personalizado para validar campos obrigatórios e gerenciar falhas de rede.
* **Layout Responsivo:** Construído com o sistema de colunas do **Bootstrap 5**.



---

# 👨‍💻 Sobre mim (About Me)
Olá, meu nome é **Kaio**, tenho 22 anos. Como meu objetivo principal é o **Back-End com Python**, este projeto foi fundamental para entender como o front-end "conversa" com servidores externos. Dominar o fluxo de requisição e resposta é o primeiro passo para construir minhas próprias APIs no futuro.

### Entre em contato (Contact me)

[![LinkedIn](https://img.shields.io/badge/LinkedIn-000?style=for-the-badge&logo=linkedin&logoColor=4F0199)](https://linkedin.com/in/kaio-grativol-baldo-071a74150/)
[![Instagram](https://img.shields.io/badge/Instagram-000?style=for-the-badge&logo=instagram&logoColor=4F0199)](https://www.instagram.com/kaiull__/)
[![GitHub](https://img.shields.io/badge/Github-000?style=for-the-badge&logo=github&logoColor=4F0199)](https://github.com/SeuUsuarioAqui)

---
*Este projeto demonstra competência em lidar com dados assíncronos e validação de lógica de negócio no lado do cliente.*
