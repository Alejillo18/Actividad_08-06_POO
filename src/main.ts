import { UserRepository } from './repositories/UserRepository';
import { SubscriptionRepository } from './repositories/SubscriptionRepository';
import { SubscriptionService } from './services/SubscriptionService';
import { PaymentService } from './services/PaymentService';
import { UserController } from './controllers/UserController';
import { SubscriptionController } from './controllers/SubscriptionController';
import { EmailNotificationObserver } from './observers/EmailNotificationObserver';
import { MetricsServiceObserver } from './observers/MetricsServiceObserver';
import { AccessControlObserver } from './observers/AccessControlObserver';

const userRepository = new UserRepository();
const subscriptionRepository = new SubscriptionRepository();

const subscriptionService = new SubscriptionService(subscriptionRepository);
const paymentService = new PaymentService(subscriptionRepository);

const emailObserver = new EmailNotificationObserver(userRepository);
const metricsObserver = new MetricsServiceObserver();
const accessObserver = new AccessControlObserver(userRepository);

paymentService.attach(emailObserver);
paymentService.attach(metricsObserver);
paymentService.attach(accessObserver);

const userController = new UserController(userRepository);
const subscriptionController = new SubscriptionController(subscriptionService, paymentService);

console.log("--- Ejecutando Flujo de Usuario ---");

const registerResponse = userController.register("usr_99", "Alejo Oviedo", "alejo@example.com", "1122334455");
console.log("Vista / Control de Registro:", registerResponse);

const subscribeResponse = subscriptionController.subscribe("usr_99", "Premium Monthly", 29.99);
console.log("Vista / Control de Suscripción:", subscribeResponse);

const subscriptionData = JSON.parse(subscribeResponse);
const targetSubscriptionId = subscriptionData.subscriptionId;

console.log("\n--- Iniciando Procesamiento del Pago Core ---");
const paymentResponse = subscriptionController.pay(targetSubscriptionId);
console.log("Vista / Control de Pago:", paymentResponse);