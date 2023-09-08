# TimeFrame

TimeFrame is a calendar app


## Entity Relationship Diagram (ERD)

The initial and most basic structure of our database is depicted below; it shows one user owning zero or more calendars, and one calendar containg zero or more events. This should not be a challenge for us to implement.

```mermaid
erDiagram

    users ||--o{ calendars : owns
    users {
        string username PK
        string password
        image profile_picture
    }

    calendars ||--o{ events : contains
    calendars {
        string name PK
        string owner PK, FK "references users.username"
    }

    events {
        string calendar_id FK "references compound PK of calendars"
        string name
        datetime start
        datetime end
        string location
    }
```

A new ERD shows a more complex relationship between users and calendars; one user *owns* zero or more calendars, but one or more users *access* zero or more calendars. The reason the 'accesses' relationship has one mandatory user is because an owner themself is an accessor.

```mermaid
erDiagram

    users ||--o{ calendars : owns
    users }|--o{ calendars : accesses
    users {
        string username PK
        string password
        image profile_picture
    }

    calendars ||--o{ events : contains
    calendars {
        string name PK
        string owner PK, FK "references users.username"
    }

    events {
        string calendar_id FK "references compound PK of calendars"
        string name
        datetime start
        datetime end
        string location
    }
```