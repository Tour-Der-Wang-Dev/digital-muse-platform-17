
# System Architecture Documentation

## Overview
This document provides comprehensive architectural documentation for the Lovable AI Creative Platform, including system design, data flows, and integration patterns.

**Last Updated:** 2025-06-07  
**Version:** 1.0.0  
**Architecture Type:** Single Page Application (SPA) with Backend-as-a-Service

---

## Table of Contents
1. [System Overview](#system-overview)
2. [User Interaction Flow](#user-interaction-flow)
3. [Data Flow Architecture](#data-flow-architecture)
4. [Component Architecture](#component-architecture)
5. [Database Design](#database-design)
6. [Authentication & Security](#authentication--security)
7. [API Integration](#api-integration)
8. [Deployment Architecture](#deployment-architecture)

---

## System Overview

### High-Level Architecture
```mermaid
graph TB
    subgraph "Client Layer"
        A[React SPA] --> B[Vite Dev Server]
        A --> C[Tailwind CSS]
        A --> D[TypeScript]
    end
    
    subgraph "State Management"
        E[React Query] --> F[Cache Layer]
        G[Local State] --> H[Component State]
    end
    
    subgraph "Backend Services"
        I[Supabase] --> J[Database]
        I --> K[Authentication]
        I --> L[Storage]
        M[Replicate API] --> N[AI Models]
    end
    
    subgraph "External Services"
        O[CDN] --> P[Static Assets]
        Q[Analytics] --> R[Performance Monitoring]
    end
    
    A --> E
    A --> I
    A --> M
    A --> O
```

### Technology Stack
| Layer | Technology | Purpose |
|-------|------------|---------|
| **Frontend** | React 18 + TypeScript | UI framework with type safety |
| **Build Tool** | Vite | Fast development and production builds |
| **Styling** | Tailwind CSS + CSS Variables | Utility-first styling with design system |
| **UI Components** | Radix UI + shadcn/ui | Accessible, composable components |
| **State Management** | React Query + React Hooks | Server state + client state |
| **Backend** | Supabase | Database, auth, storage BaaS |
| **AI Integration** | Replicate API | AI model inference |
| **Routing** | React Router v6 | Client-side navigation |

---

## User Interaction Flow

### Primary User Journey
```mermaid
sequenceDiagram
    participant U as User
    participant H as Header/Navigation
    participant S as Style System
    participant C as Creative Studio
    participant A as AI Service
    participant D as Database
    
    U->>H: Navigate to platform
    H->>S: Load style categories
    S->>D: Fetch user preferences
    D-->>S: Return saved styles
    
    U->>S: Select artistic style
    S->>C: Apply style configuration
    
    U->>C: Input creative prompt
    C->>A: Send generation request
    A-->>C: Return generated image
    C->>D: Save to user gallery
    
    U->>S: Customize style parameters
    S->>C: Update preview
    C->>A: Regenerate with new params
```

### Component Interaction Flow
```mermaid
graph LR
    subgraph "Layout Components"
        A[PremiumHeader] --> B[Main Content]
        B --> C[PremiumFooter]
    end
    
    subgraph "Core Features"
        D[HeroSection] --> E[CreativeStudio]
        E --> F[StyleSystem]
        F --> G[ArtistGallery]
    end
    
    subgraph "Educational"
        H[LearningCenter] --> I[SkillDevelopment]
        I --> J[CommunityLearning]
    end
    
    subgraph "Enterprise"
        K[ProfessionalFeatures] --> L[EnterprisePlanning]
        L --> M[CommercialLicensing]
    end
    
    B --> D
    B --> H
    B --> K
```

---

## Data Flow Architecture

### State Management Pattern
```mermaid
graph TD
    subgraph "Server State (React Query)"
        A[API Queries] --> B[Cache Layer]
        B --> C[Background Updates]
        C --> D[Optimistic Updates]
    end
    
    subgraph "Client State (React Hooks)"
        E[Component State] --> F[Context Providers]
        F --> G[Custom Hooks]
    end
    
    subgraph "Persistent State"
        H[Local Storage] --> I[User Preferences]
        J[Supabase] --> K[User Data]
        J --> L[Generated Content]
    end
    
    A --> E
    E --> H
    A --> J
```

### Data Processing Pipeline
```mermaid
graph LR
    A[User Input] --> B[Validation Layer]
    B --> C[Business Logic]
    C --> D[Service Layer]
    D --> E[External APIs]
    E --> F[Response Processing]
    F --> G[State Updates]
    G --> H[UI Re-render]
```

---

## Component Architecture

### Core Component Hierarchy
```mermaid
graph TD
    A[App.tsx] --> B[Router]
    B --> C[Index Page]
    
    C --> D[PremiumHeader]
    C --> E[Main Sections]
    C --> F[PremiumFooter]
    
    E --> G[HeroSection]
    E --> H[CreativeStudio]
    E --> I[StyleSystem]
    E --> J[Feature Sections]
    
    I --> K[Style Categories]
    I --> L[Technical Controls]
    I --> M[Custom Styles]
    
    H --> N[Prompt Interface]
    H --> O[Generation Controls]
    H --> P[Preview Gallery]
```

### Component Responsibilities

#### **PremiumHeader Component**
- **Purpose**: Primary navigation and branding
- **Features**: Responsive menu, user authentication status, premium branding
- **Dependencies**: UI components (Button, Sheet), Lucide icons
- **State**: Navigation state, mobile menu toggle

#### **CreativeStudio Component**
- **Purpose**: AI image generation interface
- **Features**: Prompt input, style selection, parameter controls, result gallery
- **Dependencies**: ReplicateService, UI components, image optimization
- **State**: Generation parameters, loading states, results cache

#### **StyleSystem Component**
- **Purpose**: Advanced artistic style management
- **Features**: Style categories, technical controls, custom presets, mixing
- **Dependencies**: Complex UI components (Tabs, Sliders, Selects)
- **State**: Active styles, custom configurations, saved presets
- **Note**: 471 lines - requires refactoring into smaller components

#### **ArtistGallery Component**
- **Purpose**: Showcase generated artwork and artist portfolios
- **Features**: Masonry layout, filtering, modal views, professional presentation
- **Dependencies**: Image optimization, modal components, filtering logic
- **State**: Gallery items, filter settings, modal state

---

## Database Design

### Supabase Schema
```mermaid
erDiagram
    Users ||--o{ Projects : creates
    Users ||--o{ Styles : customizes
    Users ||--o{ Generations : generates
    
    Projects ||--o{ Generations : contains
    Projects ||--o{ Collaborators : has
    
    Styles ||--o{ StyleParameters : defines
    Styles ||--o{ Generations : applies
    
    Users {
        uuid id PK
        string email
        string name
        jsonb preferences
        timestamp created_at
        timestamp updated_at
    }
    
    Projects {
        uuid id PK
        uuid user_id FK
        string name
        jsonb settings
        boolean is_public
        timestamp created_at
    }
    
    Generations {
        uuid id PK
        uuid user_id FK
        uuid project_id FK
        text prompt
        jsonb parameters
        string image_url
        jsonb metadata
        timestamp created_at
    }
    
    Styles {
        uuid id PK
        uuid user_id FK
        string name
        string category
        jsonb configuration
        boolean is_public
        timestamp created_at
    }
```

### Data Access Patterns
- **Read Heavy**: Gallery browsing, style exploration
- **Write Patterns**: Image generation, style customization
- **Caching Strategy**: React Query for API responses, browser cache for images
- **Real-time Updates**: Supabase subscriptions for collaborative features

---

## Authentication & Security

### Authentication Flow
```mermaid
sequenceDiagram
    participant U as User
    participant C as Client App
    participant S as Supabase Auth
    participant D as Database
    
    U->>C: Login attempt
    C->>S: Authenticate credentials
    S-->>C: Return JWT token
    C->>C: Store token securely
    
    C->>D: API request with token
    D->>S: Validate token
    S-->>D: Token validation result
    D-->>C: Protected resource
```

### Security Measures
- **Authentication**: Supabase Auth with JWT tokens
- **Authorization**: Row Level Security (RLS) policies
- **Data Validation**: Client-side + server-side validation
- **Content Safety**: ComplianceMonitor service for generated content
- **API Security**: Rate limiting, CORS configuration
- **Privacy**: GDPR compliance, data anonymization options

---

## API Integration

### Replicate API Integration
```mermaid
sequenceDiagram
    participant C as Client
    participant R as ReplicateService
    participant A as Replicate API
    participant Q as React Query
    
    C->>R: generateImage(prompt, style)
    R->>A: POST /predictions
    A-->>R: Return prediction ID
    R->>A: GET /predictions/{id} (polling)
    A-->>R: Return result
    R-->>C: Processed image data
    C->>Q: Cache result
```

### API Lifecycle Management
1. **Request Formation**: Parameter validation and formatting
2. **Error Handling**: Retry logic, fallback strategies
3. **Response Processing**: Image optimization, metadata extraction
4. **Caching**: Intelligent caching with React Query
5. **Rate Limiting**: Respect API limits, queue management

---

## Deployment Architecture

### Production Environment
```mermaid
graph TB
    subgraph "CDN Layer"
        A[Cloudflare/Vercel CDN] --> B[Static Assets]
        A --> C[Edge Caching]
    end
    
    subgraph "Application Layer"
        D[Vercel/Netlify] --> E[React App]
        E --> F[Serverless Functions]
    end
    
    subgraph "Backend Services"
        G[Supabase Cloud] --> H[PostgreSQL]
        G --> I[Authentication]
        G --> J[File Storage]
    end
    
    subgraph "External APIs"
        K[Replicate API] --> L[AI Models]
        M[Analytics] --> N[Monitoring]
    end
    
    A --> D
    D --> G
    D --> K
    D --> M
```

### Deployment Pipeline
1. **Development**: Local Vite dev server
2. **Staging**: Preview deployments on feature branches
3. **Production**: Automated deployment on main branch
4. **Monitoring**: Performance metrics, error tracking
5. **Rollback**: Instant rollback capabilities

### Performance Optimization
- **Bundle Splitting**: Code splitting by route and feature
- **Image Optimization**: WebP conversion, lazy loading
- **Caching Strategy**: Aggressive caching with cache invalidation
- **CDN Usage**: Global content delivery
- **Preloading**: Critical resource preloading

---

## System Boundaries & Interfaces

### External System Integrations
| System | Interface Type | Purpose | Data Flow |
|--------|----------------|---------|-----------|
| Replicate API | REST API | AI image generation | Bidirectional |
| Supabase | REST + Realtime | Database, auth, storage | Bidirectional |
| CDN | HTTP | Static asset delivery | Outbound |
| Analytics | JavaScript SDK | Usage tracking | Outbound |

### Security Checkpoints
- **Input Validation**: All user inputs sanitized
- **Authentication Gates**: Protected routes and API calls
- **Content Filtering**: AI-generated content screening
- **Rate Limiting**: API usage protection
- **Data Encryption**: In-transit and at-rest encryption

---

**Document Version:** 1.0.0  
**Last Updated:** 2025-06-07  
**Next Review:** 2025-07-07  
**Architecture Review Cycle:** Quarterly
