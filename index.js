import { Plugin } from '@vizality/entities';

export default class mock extends Plugin {
  async start () {
    vizality.api.commands.registerCommand({
      command: "mock",
      description: "Mocks someone for their mistakes in chat.",
      usage: "{c} text",
      executor: async (args) => {
        return {
          send: true,
          result: args.join(' ').split('').map((c, i) => i % 2 ? c.toUpperCase() : c).join('')
        }
      }
    })
  }

  async stop () {
    vizality.api.commands.unregisterCommand('mock');
  }
}