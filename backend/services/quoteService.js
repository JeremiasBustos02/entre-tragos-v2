exports.processQuote = async (data) => {
  if (!data.name) throw new Error('El nombre es obligatorio');
  if (!data.email) throw new Error('El correo electrónico es obligatorio');
  if (!data.phone) throw new Error('El teléfono es obligatorio');
  if (!data.eventDate) throw new Error('La fecha del evento es obligatoria');
  if (!data.barType) throw new Error('El tipo de barra es obligatorio');

  await new Promise((resolve) => setTimeout(resolve, 1000));

  return {
    id: Date.now(),
    ...data,
    status: 'pending',
    createdAt: new Date().toISOString(),
  };
};
