const REPOSITORY_TYPES = {
	IUserRepository: Symbol.for('IUserRepository'),
	IProductRepository: Symbol.for('IProductRepository'),
	
	// IEmailNotificationRepository: Symbol.for('IEmailNotificationRepository'),
	// IEmailNotificationContentRepository: Symbol.for('IEmailNotificationContentRepository'),
	// INotificationWorkflowRepository: Symbol.for('INotificationWorkflowRepository'),
	// INotificationTemplateRepository: Symbol.for('INotificationTemplateRepository'),
};

export { REPOSITORY_TYPES };
