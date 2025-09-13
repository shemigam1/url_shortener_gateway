# URL Shortener API Gateway

A high-performance API gateway that provides authentication, rate limiting, and reverse proxy capabilities for the URL shortener microservice. This gateway acts as the central entry point, handling security, traffic management, and request routing.

## Features

🔐 **Authentication & Authorization**

- JWT token-based authentication
- API key management

⚡ **Rate Limiting**

- Configurable rate limits per endpoint
- User-based and IP-based rate limiting
- Custom rate limiting rules

🔄 **Reverse Proxy**

- Health check monitoring
- Request/response transformation

📊 **Monitoring & Analytics**

- Real-time metrics and logging
- Request/response tracking
- Performance monitoring
- Error rate analysis

🛡️ **Security**

- CORS handling
- Request sanitization

## Architecture

```
┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐
│   Client Apps   │───▶│  API Gateway    │───▶│  URL Shortener  │
│                 │    │                 │    │    Service      │
│ Web/Mobile/API  │    │ • Auth          │    │                 │
└─────────────────┘    │ • Rate Limit    │    │ • Create URLs   │
                       │ • Proxy         │    │ • Analytics     │
                       │ • Monitoring    │    │ • Management    │
                       └─────────────────┘    └─────────────────┘
```

## Tech Stack

- **Runtime**: Node.js 18+
- **Framework**: Express.js
- **Authentication**: JWT
- **Rate Limiting**
- **Database**: MongoDB

## Installation

### Prerequisites

- Node.js 18+ (or your preferred runtime)

### Local Setup

1. **Clone the repository**

   ```bash
   git clone https://github.com/shemigam1/url_shortener_gateway.git
   cd url_shortener_gateway
   ```

2. **Install dependencies**

   ```bash
   # For Node.js
   npm install
   ```

3. **Environment Configuration**

   ```bash
   vim .env
   ```

4. **Configure Environment Variables**
   ```env
   # Server Configuration
   PORT=8080
   NODE_ENV=development
   JWT_SECRET=your-super-secret-jwt-key
   DATABASE_URL=db url
   ```

## API Documentation

### Authentication Endpoints

#### Register User

```http
POST /api/v1/auth/register
Content-Type: application/json

{
  "email": "user@example.com",
  "password": "securePassword123",
  "name": "John Doe"
}
```

#### Login

```http
POST /api/v1/auth/login
Content-Type: application/json

{
  "email": "user@example.com",
  "password": "securePassword123"
}
```

**Response:**

```json
{
  "success": true,
  "message": "user created",
  "code": 200,
  "ReturnStatus": "OK"
  "data": {
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
    "user": {
      "id": "user123",
      "email": "user@example.com",
      "name": "John Doe",
    },
    "expiresIn": "1hr"
  }
}
```

### Proxied Endpoints

All URL shortener endpoints are proxied through the gateway with authentication and rate limiting applied:

#### Shorten URL (Proxied)

```http
POST /api/v1/url
Authorization: Bearer {jwt_token}

{
  "url": "https://example.com/very/long/url",
}
```

#### Get URL Info (Proxied)

```http
GET /api/v1/url/{shortCode}
Authorization: Bearer {jwt_token}
```

### Gateway Management Endpoints

#### Health Check

```http
GET /health
```

#### Metrics

```http
GET /api/v1/url/analytics/{shortCode}
```

## Authentication Methods

### 1. JWT Bearer Token

```bash
curl -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIs..." \
     http://localhost:8080/api/v1/shorten
```

## Contributing

1. Fork the repository
2. Create feature branch: `git checkout -b feature/amazing-feature`
3. Commit changes: `git commit -m 'Add amazing feature'`
4. Push to branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

### Development Guidelines

- Write tests for all new features
- Follow existing code style and conventions
- Update documentation for API changes
- Ensure all tests pass before submitting PR

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Support

- 🐛 **Issues**: [GitHub Issues](https://github.com/shemigam1/url_shortener_gateway/issues)
- 💬 **Discussions**: [GitHub Discussions](https://github.com/shemigam1/url_shortener_gateway/discussions)
- 📧 **Email**: support@example.com

---

**Star this repository** ⭐ if you find it helpful!

Built with ❤️ by [shemigam1](https://github.com/shemigam1)
