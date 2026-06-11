# Sistema de Gestión de Suscripciones y Facturación Premium

Este proyecto implementa el backend de un sistema de gestión de suscripciones y facturación aplicando principios **SOLID** y **Patrones de Diseño** avanzados en **TypeScript**. La persistencia se realiza en memoria a través de una arquitectura desacoplada y escalable.

## Patrones de Diseño Implementados

* **Singleton**: Controla el acceso único a la simulación de persistencia de datos mediante `DatabaseMemory`.
* **Factory Method**: Instancia dinámicamente el canal de comunicación a través de `NotificationFactory`.
* **Repository Pattern**: Aísla la lógica de negocio del acceso directo a los datos mediante abstracciones (`IUserRepository`, `ISubscriptionRepository`).
* **Observer**: Acopla de forma "lazy" y reactiva los eventos posteriores a un pago exitoso (`PaymentService` actúa como *Subject*).
* **Model-View-Controller (MVC)**: Organiza el flujo de la aplicación separando las responsabilidades de presentación, orquestación y datos.

---

## Requisitos Previos

Antes de comenzar, tenemos que tener instalado:
* **Node.js** (Versión 18 o superior recomendada)
* **npm** (Gestor de paquetes de Node)

---

Este documento contiene la especificación de diseño, el diagrama de clases, la estructura de directorios. El mismo esta escrito en TypeScript, aplicando patrones creacionales, estructurales y de comportamiento bajo los principios SOLID.

---

## 1. Diagrama de Clases UML (Esquema Textual)

```plaintext
+---------------------+             +--------------------+
|   DatabaseMemory    |<------------|  UserRepository    |
|     (Singleton)     |             |    (Repository)    |
+---------------------+             +--------------------+
           ^                                  ^
           |                                  |
+---------------------+             +--------------------+
|  SubscriptionRepo   |             |  UserController    |
|    (Repository)     |             |      (MVC)         |
+---------------------+             +--------------------+
           ^                                  |
           |                                  v
+---------------------+             +--------------------+
| SubscriptionContr.  |             |   PaymentService   |
|      (MVC)          |             |     (Subject)      |
+---------------------+             +--------------------+
                                              |
                                              v
                                    +--------------------+
                                    |  IObserver (Interface)
                                    +--------------------+
                                      /        |        \
                                     /         |         \
                                    v          v          v
                        [EmailObserver] [MetricsObserver] [AccessObserver]
                               |
                               v
                       +-------------------+
                       |NotificationFactory|
                       +-------------------+