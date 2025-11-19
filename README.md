#  Proyecto: Motor de Precios Dinámicos para E-commerce LATAM

Este proyecto desarrolla un sistema prescriptivo de **Dynamic Pricing** (Precios Dinámicos) para una plataforma de E-commerce internacional, resolviendo el problema de la optimización manual de precios y promociones en mercados volátiles de Latinoamérica.

## Objetivo de la Fase 1: Ingeniería y Preparación de Datos

El objetivo principal de esta fase es limpiar, transformar y re-contextualizar el dataset base (`Online Retail.csv`) para crear la **Tabla Maestra** (`master_df.csv`) que será utilizada en la fase de modelado de Elasticidad y Demand Forecasting.

## Configuración del Entorno de Desarrollo

Es fundamental utilizar un **Entorno Virtual** (`venv`) para aislar las dependencias del proyecto y asegurar la **Claridad Técnica** (Criterio 1).

### 1. Creación y Activación del Entorno Virtual

1.  **Crear el entorno virtual:** (Abrir la terminal en VS Code en la carpeta raíz)
    ```bash
    python -m venv venv
    ```

2.  **Activar el entorno virtual:**
    * **Windows (PowerShell):**
        ```bash
        .\venv\Scripts\Activate
        ```
    * **macOS / Linux:**
        ```bash
        source venv/bin/activate
        ```
*(Verás `(venv)` al inicio de la línea de comandos, indicando que estás dentro del entorno.)*

### 2. Instalación de Dependencias

Instala todas las librerías necesarias con el siguiente comando:

```bash
pip install pandas numpy jupyter
pip install statsmodels
pip install xgboost scikit-learn
pip install seaborn matplotlib