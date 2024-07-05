# StyleSweep

StyleSweep is a powerful tool designed to help developers maintain clean, efficient, and optimized CSS code. This tool offers a range of features including unused CSS detection, conflict detection, customizable analysis settings, and support for multiple languages.

## Features

- **File Upload for CSS and SCSS Files**: Easily upload and process your CSS or SCSS files.
- **Unused CSS Detection**: Identify and remove unused CSS rules to keep your stylesheets lean.
- **Conflict Detection and Reporting**: Detect CSS rules that conflict and receive detailed reports.
- **Customizable Analysis Settings**: Customize the analysis by setting ignore rules and conflict detection thresholds.
- **Internationalization (i18n)**: Support for multiple languages with dynamic language switching.
- **Visualization**: Visualize conflicts and unused rules using charts and diagrams.
- **Download Cleaned CSS**: Download the cleaned and optimized CSS file after processing.
- **Command-Line Interface (CLI)**: Integrate the tool into CI/CD pipelines or use it from the command line.

## Installation

### Prerequisites

- [Node.js](https://nodejs.org/) (v14 or higher)
- [Docker](https://www.docker.com/)
- [Kubernetes](https://kubernetes.io/)

### Backend Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/stylesweep.git
   cd stylesweep
   ```

2. Install backend dependencies:
   ```bash
   npm install
   ```

3. Start the backend server:
   ```bash
   npm start
   ```

### Frontend Setup

1. Navigate to the `src` directory:
   ```bash
   cd src
   ```

2. Install frontend dependencies:
   ```bash
   npm install
   ```

3. Start the Angular application:
   ```bash
   ng serve
   ```

### Docker Setup

1. Build the Docker image:
   ```bash
   docker build -t raydalsayf/stylesweep .
   ```

2. Push the Docker image to Docker Hub:
   ```bash
   docker push raydalsayf/stylesweep
   ```

### Kubernetes Deployment

1. Apply the Kubernetes deployment:
   ```bash
   kubectl apply -f deployment.yaml
   ```

2. Apply the Kubernetes service:
   ```bash
   kubectl apply -f service.yaml
   ```

## Usage

### Web Interface

1. Open your browser and navigate to `http://localhost:4200`.
2. Upload a CSS or SCSS file.
3. Customize analysis settings if needed.
4. View the cleaned CSS and conflict reports.
5. Download the cleaned CSS.

### Command-Line Interface (CLI)

1. Install the CLI globally:
   ```bash
   npm install -g stylesweep
   ```

2. Use the CLI to clean a CSS or SCSS file:
   ```bash
   stylesweep <file-path> [--ignore-rules <rules>] [--threshold <value>]
   ```

## Configuration

### Customizable Analysis Settings

- **Ignore Rules**: Comma-separated list of CSS rules to ignore during analysis.
- **Conflict Detection Threshold**: Set the specificity threshold for conflict detection.

### Internationalization

- Supported languages: English (`en`), Spanish (`es`)
- Add more languages by creating translation files in the `src/assets/i18n/` directory.

## License

This project is licensed under the MIT License.

## Contact

For questions or support, please open an issue on GitHub or contact the project maintainer at [https://www.linkedin.com/in/raydalsayf/](https://www.linkedin.com/in/raydalsayf/).